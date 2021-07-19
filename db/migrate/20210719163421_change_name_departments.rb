class ChangeNameDepartments < ActiveRecord::Migration[6.0]
  def change

    rename_column :departments, :name_department, :department

  end
end
