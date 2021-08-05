class AddOrderToSubModulePages < ActiveRecord::Migration[6.0]
  def change
    add_column :sub_module_pages, :order_sub, :integer, :after => :content
  end
end
