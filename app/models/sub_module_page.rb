class SubModulePage < ApplicationRecord
  belongs_to :module_page

  def self.getSubmoduleModuleId(module_page_id)
  		SubModulePage.select("sub_module_pages.*,group_concat(distinct dependence.sub_module_name) name_dependences")
  		.joins("left join sub_module_page_dependences on sub_module_page_dependences.sub_module_page_id = sub_module_pages.id")
  		.joins("left join sub_module_pages dependence  on dependence.id = sub_module_page_dependences.dependence_id")
  		.group("sub_module_pages.id")
  end

  def self.getSubmoduleModuleIdUserId(module_page_id,user_id)
  		sql = ["LEFT JOIN (
				SELECT sub_module_page_dependences.sub_module_page_id,
					group_concat(distinct dependence.sub_module_name) name_dependences
				 from sub_module_page_dependences
				left join sub_module_page_has_users on
				 sub_module_page_has_users.sub_module_page_id = sub_module_page_dependences.dependence_id
				 and sub_module_page_has_users.user_id = %s and sub_module_page_has_users.view_module is  true
				left join sub_module_pages dependence  on dependence.id = sub_module_page_dependences.dependence_id
				where  sub_module_page_has_users.id is null
				group by sub_module_page_dependences.sub_module_page_id
				) dependence on dependence.sub_module_page_id=sub_module_pages.id",user_id]
  		join1 = sanitize_sql_array(sql)
  		
  		sql = ["left join sub_module_page_has_users on sub_module_page_has_users.sub_module_page_id = sub_module_pages.id 
  				and sub_module_page_has_users.user_id = %s",user_id]
  		join2 = sanitize_sql_array(sql)

  		SubModulePage.select("sub_module_pages.*,dependence.name_dependences, if(dependence.name_dependences is not null,1,0) locked,
			if(sub_module_page_has_users.view_module is true,1,0) view_module")
  		.joins(join1)
  		.joins(join2)
  		.where("sub_module_pages.module_page_id=?",module_page_id)
  		.group("sub_module_pages.id")
  end
end
