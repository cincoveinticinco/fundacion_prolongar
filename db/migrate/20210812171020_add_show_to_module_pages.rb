class AddShowToModulePages < ActiveRecord::Migration[6.0]
  def change
    add_column :module_pages, :show_name, :boolean, :after => :name_module
  end
end
