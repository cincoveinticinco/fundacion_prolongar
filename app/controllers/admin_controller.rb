class AdminController < ApplicationController
  FOLDER = 		
  def index
  	@module_pages = ModulePage.all
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

    home_banner = HomeBanner.where('id = ?', params[:id]).take
    home_banner = HomeBanner.new if home_banner.blank?

    file_dir=("#{Rails.root}/public/images_banner")
    image = params[:archivohome];
    if image.blank?
    else
      #Nombre original del archivo.
      nombre = image.original_filename;
      #obtener el nombre del archivo
      #nombre_spl = nombre.split('.xlsx')
      nombre_spl = nombre.split('.png')
      #nombre.gsub! '.doc', '.docx'
      #Directorio donde se va a guardar.
      #directorio = Ruta_directorio_archivos;
      directorio = file_dir
      #Extensión del archivo.
      #extension = nombre.slice(nombre.rindex("."), nombre.length).downcase;
      #concat = rand(12254)
      #valor = concat.to_s
      namefile = nombre_spl[0].to_s
      #Ruta del archivo.
      path = File.join(directorio, namefile);
      resultado = File.open(path, "wb") { |f| f.write(image.read) };

    end

    home_banner.image =namefile
    home_banner.order = params[:order]
    home_banner.save
    render :json => {
    :error => false,
    :msg => "Home banner create"
  }
  end


  def delete_home_banner
    HomeBanner.where('id = ?', params[:id]).destroy_all
     render :json => {
      msg:'home_banner succesfully deleted'
          }
  end

  def list_home_banner
      @home_banner = HomeBanner.select('image','order').where('id = ?', params[:id])
      render :json => {
        :home_banner=> @home_banner,
      }

  end

  def create_contacts

    contacts = Contact.where('id = ?', params[:id]).take
    contacts = Contact.new if contacts.blank?
    contacts.name = params[:name]
    contacts.direccion = params[:direccion]
    contacts.edificio = params[:edificio]
    contacts.ciudad = params[:ciudad]
    contacts.telefono = params[:telefono]
    contacts.email = params[:email]

    contacts.save
    render :json => {
    :error => false,
    :msg => "Contacts create"
  }
  end


  def delete_contacts
    Contact.where('id = ?', params[:id]).destroy_all
     render :json => {
      msg:'contacts succesfully deleted'
          }
  end

  def list_contacts
      contacts = Contact.select('name','direccion','edificio','ciudad','telefono','email')
      render :json => {
        :contacts=> contacts,
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
