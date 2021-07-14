class AdminController < ApplicationController
  def index
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
  

end
