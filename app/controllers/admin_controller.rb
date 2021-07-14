class AdminController < ApplicationController
  FOLDER = 		
  def index
  	@module_pages = ModulePage.all
    @home_banners = HomeBanner.all
    @contacts = Contact.all
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


  def create_home_banner
    @home_banner  = HomeBanner.where('id=?',params['id']).take if !params['id'].blank?
  end

  def insert_home_banner

    image = nil
    image = save_file(params[:image],'images_banner') if !params[:image].blank?


    home_banner = HomeBanner.where('id = ?', params[:id]).take
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
