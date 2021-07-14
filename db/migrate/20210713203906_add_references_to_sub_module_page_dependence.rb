class AddReferencesToSubModulePageDependence < ActiveRecord::Migration[6.0]
  def change
  	add_foreign_key :sub_module_page_dependences, :sub_module_pages, column: :dependence_id, foreign_key: {on_delete: :cascade, on_update: :cascade}

  end
end
