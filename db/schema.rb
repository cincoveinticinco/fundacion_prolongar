# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
=======
<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2021_07_16_154129) do
=======
<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2021_07_14_220006) do

  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
=======
>>>>>>> a322ff98abe40e9a04808c5913b46b3c41895be5
ActiveRecord::Schema.define(version: 2021_07_15_214742) do
>>>>>>> 71fd73025173fb5b2e281bc89deb34038cc5a41c

  create_table "cities", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name_city"
    t.bigint "departments_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["departments_id"], name: "index_cities_on_departments_id"
  end

  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name"
    t.string "direccion"
    t.string "edificio"
    t.string "ciudad"
    t.string "telefono"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "departments", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name_department"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "genders", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "gender"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "home_banners", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "image"
    t.integer "order_banner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_contents", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name_page"
    t.text "texto"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name_module"
    t.string "imagen_min"
    t.text "description"
    t.string "img_banner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sub_module_page_dependences", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.bigint "sub_module_page_id", null: false
    t.bigint "dependence_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dependence_id"], name: "fk_rails_e436789fe7"
    t.index ["sub_module_page_id"], name: "index_sub_module_page_dependences_on_sub_module_page_id"
  end

  create_table "sub_module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.bigint "module_page_id", null: false
    t.string "sub_module_name"
    t.text "description"
    t.string "link"
    t.string "file_pdf"
    t.text "content"
    t.string "image_min"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["module_page_id"], name: "index_sub_module_pages_on_module_page_id"
  end

  create_table "user_admins", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
    t.string "user_name"
    t.string "password"
    t.string "email"
    t.string "age"
    t.bigint "gender_id", null: false
    t.boolean "current_location"
    t.bigint "city_id", null: false
    t.boolean "receive_info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_users_on_city_id"
    t.index ["gender_id"], name: "index_users_on_gender_id"
  end

  add_foreign_key "cities", "departments", column: "departments_id"
  add_foreign_key "sub_module_page_dependences", "sub_module_pages", column: "dependence_id"
  add_foreign_key "sub_module_page_dependences", "sub_module_pages", on_update: :cascade, on_delete: :cascade
  add_foreign_key "sub_module_pages", "module_pages", on_update: :cascade, on_delete: :cascade
  add_foreign_key "users", "cities"
  add_foreign_key "users", "genders"
end
