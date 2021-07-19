class InsertMenu < ActiveRecord::Migration[6.0]
  def change
    
    menu=MenuContent.new
    menu.id = 1
    menu.name_page = "¿PARA QUE ES?"
    menu.save

    menu=MenuContent.new
    menu.id = 2
    menu.name_page = "¿A QUIEN VA DIRIGIDA?"
    menu.save

    menu=MenuContent.new
    menu.id = 3
    menu.name_page = "MODULOS"
    menu.save

    menu=MenuContent.new
    menu.id = 4
    menu.name_page = "PRINCIPIOS"
    menu.save

    menu=MenuContent.new
    menu.id = 5
    menu.name_page = "KAS"
    menu.save

  end
end
