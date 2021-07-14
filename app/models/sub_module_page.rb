class SubModulePage < ApplicationRecord
  belongs_to :module_page

  def self.getSubmoduleModuleId(module_page_id)
  		SubModulePage.select("sub_module_pages.*,group_concat(distinct dependence.sub_module_name) name_dependences")
  		.joins("left join sub_module_page_dependences on sub_module_page_dependences.sub_module_page_id = sub_module_pages.id")
  		.joins("left join sub_module_pages dependence  on dependence.id = sub_module_page_dependences.dependence_id")
  		.group("sub_module_pages.id")
  end
end
