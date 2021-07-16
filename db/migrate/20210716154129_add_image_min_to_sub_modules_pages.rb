class AddImageMinToSubModulesPages < ActiveRecord::Migration[6.0]
  def change

    add_column :sub_module_pages, :image_min, :string ,:after => :content

  end
end
