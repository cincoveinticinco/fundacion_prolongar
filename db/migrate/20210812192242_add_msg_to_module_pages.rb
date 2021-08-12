class AddMsgToModulePages < ActiveRecord::Migration[6.0]
  def change
    add_column :module_pages, :msg_felicitacion, :text, :after => :description
  end
end
