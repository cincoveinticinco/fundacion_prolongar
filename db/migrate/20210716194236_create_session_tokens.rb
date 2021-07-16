class CreateSessionTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :session_tokens do |t|
      t.references :users, null: false, foreign_key: {on_delete: :cascade, on_update: :cascade}
      t.string :token
      t.timestamps
    end
  end
end
