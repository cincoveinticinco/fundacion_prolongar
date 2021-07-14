class AdminController < ApplicationController
  FOLDER = 		
  def index
  	@module_pages = ModulePage.all
    @home_banners = HomeBanner.all.order(id: :asc)
    @contacts = Contact.all
    @user_admin = UserAdmin.all
  end

  def create_module
  	@module_page  = ModulePage.where('id=?',params['id']).take if !params['id'].blank?
  end

  def insert_module

  	  imagen_min = nil
  	  img_banner = nil
  	  imagen_min = save_file(params[:imagen_min],'img_modules') if !params[:imagen_min].blank?
  	  img_banner = save_file(params[:img_banner],'img_modules') if !params[:img_banner].blank?


  	  module_page = ModulePage.where('id=?',params['id']).take
  	  module_page = ModulePage.new if module_page.blank? 
  	  module_page.name_module = params[:name_module]
  	  module_page.imagen_min = imagen_min if !imagen_min.nil?
  	  module_page.description = params[:description]
  	  module_page.img_banner = img_banner if !img_banner.nil?
  	  module_page.save 

  	  flash[:msg]='Modulo creado' if params['id'].blank?
  	  flash[:msg]='Modulo Editado' if !params['id'].blank?
   	  redirect_to '/admin/index'
  	
  end

  def delete_module
  	
  	module_page = ModulePage.where('id=?',params[:id])
  	delete_file(module_page[0]['imagen_min'])
  	delete_file(module_page[0]['img_banner'])

  	module_page.destroy_all
  	flash[:msg]='Modulo Eliminado'
  	redirect_to '/admin/index'
  	
  end

  def sub_module
    @sub_modules = SubModulePage.getSubmoduleModuleId(params[:id])
    @module_page = ModulePage.where('id=?',params[:id]).take

  end

  def create_sub_module
    @module_page_id = params[:module_page_id]
    @sub_module  = SubModulePage.where('id=?',params['id']).take if !params['id'].blank?
    @dependences_id = []
    if !params['id'].blank?
      @dependences_id = SubModulePageDependence.where('sub_module_page_id=?',params['id']).collect(&:dependence_id)
    end
    @dependences = SubModulePage.where('module_page_id=?',@module_page_id)
    @dependences = @dependences.where('id not in (?)',params['id']) if !params['id'].blank?
  end

  def insert_sub_module
    
      sub_module = SubModulePage.where('id=?',params['id']).take
      sub_module = SubModulePage.new if sub_module.blank? 
      sub_module.module_page_id = params[:module_page_id]
      sub_module.sub_module_name = params[:sub_module_name]
      sub_module.description = params[:description]
      sub_module.link = params[:link]
      sub_module.content = params[:content]
      sub_module.save 

      dependences = params[:dependences]
      SubModulePageDependence.where('sub_module_page_id=?',sub_module.id).destroy_all
      if !dependences.blank?
        dependences.each do |id|
          dependence = SubModulePageDependence.new
          dependence.sub_module_page_id = sub_module.id
          dependence.dependence_id = id
          dependence.save
        end
      end

      flash[:msg]='Sub Modulo creado' if params['id'].blank?
      flash[:msg]='Sub Modulo Editado' if !params['id'].blank?
      redirect_to '/admin/sub_module/'+params[:module_page_id]
  end

  def delete_sub_module
    
    sub_module = SubModulePage.where('id=?',params[:id])
    module_page_id = sub_module[0]['module_page_id']
    SubModulePageDependence.where('dependence_id=?',params[:id]).destroy_all
    sub_module.destroy_all
    flash[:msg]='Sub Modulo Eliminado'
    redirect_to '/admin/sub_module/'+module_page_id.to_s
    
  end


  def create_home_banner
    @home_banner  = HomeBanner.where('id=?',params['id']).take if !params['id'].blank?
    @home_banner2  = HomeBanner.all.order(id: :desc)
  end

  def insert_home_banner

    image = nil
    image = save_file(params[:image],'images_banner') if !params[:image].blank?

    home_banner = HomeBanner.where('id = ?', params[:id]).take
    home_banner2  = HomeBanner.all.order(id: :desc)
    home_banner = HomeBanner.new if home_banner.blank?
    home_banner.image = image if !image.nil?
    home_banner.order = params[:order]
    home_banner.save 
   

    flash[:msg]='Banner creado' if params['id'].blank?
    flash[:msg]='Banner Editado' if !params['id'].blank?
    redirect_to '/admin/index'

 
  end


  def delete_home_banner

    home_banner = HomeBanner.where('id = ?', params[:id])
    delete_file(home_banner[0]['image'])
    home_banner.destroy_all
  	flash[:msg]='Banner Eliminado'
  	redirect_to '/admin/index'

  end

  def create_contact
    @contact  = Contact.where('id=?',params['id']).take if !params['id'].blank?
  end

  def insert_contact

    contact = Contact.where('id = ?', params[:id]).take
    contact = Contact.new if contact.blank?
    contact.name = params[:name]
    contact.direccion = params[:direccion]
    contact.edificio = params[:edificio]
    contact.ciudad = params[:ciudad]
    contact.telefono = params[:telefono]
    contact.email = params[:email]
    contact.save

    flash[:msg]='Contacts creado' if params['id'].blank?
    flash[:msg]='Contacts Editado' if !params['id'].blank?
    redirect_to '/admin/index'

  end

  def create_admin
      
      @user_admin  = UserAdmin.where('id=?',params['id']).take if !params['id'].blank?
  end

  def insert_admin

      user_admin = UserAdmin.where('id = ?', params[:id]).take
      user_admin = UserAdmin.new if user_admin.blank?
      user_admin.name = params[:name]
      user_admin.password = Digest::SHA256.hexdigest(params[:password]) if !params[:password].blank?
      user_admin.save

      flash[:msg]='Administrador creado' if params['id'].blank?
      flash[:msg]='Administrador Editado' if !params['id'].blank?
      redirect_to '/admin/index'
    
  end

  def delete_admin
      UserAdmin.where('id = ?', params[:id]).destroy_all
      flash[:msg]='Administrador Eliminado'
      redirect_to '/admin/index'
  end

  def upload_file

    img = save_file(params[:upload] ,'content')
    render :json => {
      :error => false,
      :fileName => img,
      :uploaded => 1,
      :url => "#{request.base_url}#{img}" 
    }
  end

  private

  def save_file(file,folder_img)
  		########SAVE images
  	  	folder = "#{Rails.root}/public/#{folder_img}"
  	  	name_file = (Time.new.to_s+'_'+file.original_filename).gsub(' ','')
  	  	path = File.join(folder, name_file)
  	  	File.open(path, "wb") { |f| f.write(file.read) };
  	 	################
  	 	path_save = '/'+folder_img+'/'+name_file
  	 	return path_save 
  end

  def delete_file(img)
  	img = "#{Rails.root}/public/#{img}"
  	File.delete(img) if File.exist?(img)
  end

  
  

end
