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

ActiveRecord::Schema.define(version: 2021_08_04_151449) do

<<<<<<< HEAD
  create_table "cities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "cities", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "cities", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "city"
    t.bigint "departments_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["departments_id"], name: "index_cities_on_departments_id"
  end

<<<<<<< HEAD
  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "name"
    t.string "direccion"
    t.string "edificio"
    t.string "ciudad"
    t.string "telefono"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "departments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "departments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "departments", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "department"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "genders", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "genders", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "genders", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "gender"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "home_banners", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "home_banners", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "home_banners", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "image"
    t.integer "order_banner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "locations", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_contents", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "menu_contents", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "menu_contents", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "name_page"
    t.text "texto"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "name_module"
    t.string "imagen_min"
    t.text "description"
    t.string "img_banner"
    t.string "color_module"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "session_tokens", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "session_tokens", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "session_tokens", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.bigint "users_id", null: false
    t.string "token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["users_id"], name: "index_session_tokens_on_users_id"
  end

<<<<<<< HEAD
  create_table "sub_module_page_dependences", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "sub_module_page_dependences", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "sub_module_page_dependences", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.bigint "sub_module_page_id", null: false
    t.bigint "dependence_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dependence_id"], name: "fk_rails_e436789fe7"
    t.index ["sub_module_page_id"], name: "index_sub_module_page_dependences_on_sub_module_page_id"
  end

<<<<<<< HEAD
  create_table "sub_module_page_has_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "sub_module_page_has_users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "sub_module_page_has_users", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.bigint "sub_module_page_id", null: false
    t.bigint "user_id", null: false
    t.boolean "view_module"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sub_module_page_id"], name: "index_sub_module_page_has_users_on_sub_module_page_id"
    t.index ["user_id"], name: "index_sub_module_page_has_users_on_user_id"
  end

<<<<<<< HEAD
  create_table "sub_module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "sub_module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "sub_module_pages", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
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

<<<<<<< HEAD
  create_table "user_admins", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "user_admins", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "user_admins", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "name"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

<<<<<<< HEAD
  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
<<<<<<< HEAD
  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
=======
  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
>>>>>>> b080410c69d1c441514b2840e9f1833ad13624cd
>>>>>>> 55a65aa00e33e33ef6e57005c8437b4c2a9eec05
    t.string "user_name"
    t.string "password"
    t.string "email"
    t.string "age"
    t.bigint "gender_id", null: false
    t.boolean "current_location"
    t.bigint "city_id", null: false
    t.boolean "receive_info"
    t.string "recovery_password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_users_on_city_id"
    t.index ["gender_id"], name: "index_users_on_gender_id"
  end

  add_foreign_key "cities", "departments", column: "departments_id"
  add_foreign_key "session_tokens", "users", column: "users_id", on_update: :cascade, on_delete: :cascade
  add_foreign_key "sub_module_page_dependences", "sub_module_pages", column: "dependence_id"
  add_foreign_key "sub_module_page_dependences", "sub_module_pages", on_update: :cascade, on_delete: :cascade
  add_foreign_key "sub_module_page_has_users", "sub_module_pages", on_update: :cascade, on_delete: :cascade
  add_foreign_key "sub_module_page_has_users", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "sub_module_pages", "module_pages", on_update: :cascade, on_delete: :cascade
  add_foreign_key "users", "cities"
  add_foreign_key "users", "genders"
end
