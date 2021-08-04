class AddColorModuleToModulePage < ActiveRecord::Migration[6.0]
  def change
    add_column :module_pages, :color_module, :string, :after => :img_banner
  end
end
