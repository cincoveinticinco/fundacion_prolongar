class AddRecoveryPasswordToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :recovery_password, :string, :after => :receive_info
  end
end
