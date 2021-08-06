class AddLinkToSubModulePages < ActiveRecord::Migration[6.0]
  def change
    add_column :sub_module_pages, :link_2, :string, :after => :link
  end
end
