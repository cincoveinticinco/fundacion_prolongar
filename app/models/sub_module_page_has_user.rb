class SubModulePageHasUser < ApplicationRecord
  belongs_to :sub_module_page
  belongs_to :user
end
