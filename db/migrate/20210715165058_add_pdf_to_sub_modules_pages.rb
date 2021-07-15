class AddPdfToSubModulesPages < ActiveRecord::Migration[6.0]
  def change

    add_column :sub_module_pages, :file_pdf, :string ,:after => :link

  end
end
