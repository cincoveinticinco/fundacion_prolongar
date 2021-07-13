class CreateHomeBanners < ActiveRecord::Migration[6.0]
  def change
    create_table :home_banners do |t|
      t.string :image
      t.integer :order

      t.timestamps
    end
  end
end
