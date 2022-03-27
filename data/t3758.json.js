window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3758","name":"interviewPlans","subtype":"COLLECTION","is_user_defined":true,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"VHN","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"interviewPlans"},{"field":"Type","value":"Collection"},{"field":"Module","value":[{"_type":"link","name":"vhn","id":"m117"}]}],"columns":[{"id":"column-34879","object_id":"column-34879","name":"_id","name_without_path":"_id","description":null,"is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34880","object_id":"column-34880","name":"isComplete","name_without_path":"isComplete","description":null,"is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34881","object_id":"column-34881","name":"recruiterInfo","name_without_path":"recruiterInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT","is_user_defined":true,"children":[{"id":"column-34887","object_id":"column-34887","name":"recruiterInfo.pickSlot","name_without_path":"pickSlot","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"recruiterInfo","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34882","object_id":"column-34882","name":"jobSeekerInfo","name_without_path":"jobSeekerInfo","description":null,"is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT","is_user_defined":true,"children":[{"id":"column-34888","object_id":"column-34888","name":"jobSeekerInfo.email","name_without_path":"email","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"jobSeekerInfo","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34883","object_id":"column-34883","name":"application","name_without_path":"application","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34884","object_id":"column-34884","name":"createdAt","name_without_path":"createdAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34885","object_id":"column-34885","name":"updatedAt","name_without_path":"updatedAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34886","object_id":"column-34886","name":"__v","name_without_path":"__v","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_applications_interviewPlans","title":"","description":"","is_user_defined":true,"foreign_table":"interviewPlans","foreign_table_show_schema":"interviewPlans","foreign_table_verbose":"interviewPlans","foreign_table_verbose_show_schema":"interviewPlans","foreign_table_object_id":"t3758","primary_table":"applications","primary_table_show_schema":"applications","primary_table_verbose":"applications","primary_table_verbose_show_schema":"applications","primary_table_object_id":"t3754","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_interviewPlans","title":"","description":"","is_user_defined":true,"foreign_table":"interviewPlans","foreign_table_show_schema":"interviewPlans","foreign_table_verbose":"interviewPlans","foreign_table_verbose_show_schema":"interviewPlans","foreign_table_object_id":"t3758","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_interviewPlans","title":"","description":"","is_user_defined":true,"foreign_table":"interviewPlans","foreign_table_show_schema":"interviewPlans","foreign_table_verbose":"interviewPlans","foreign_table_verbose_show_schema":"interviewPlans","foreign_table_object_id":"t3758","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"interviewPlans","object_name_show_schema":"interviewPlans","object_type":"TABLE","object_id":"t3758","type":"NORMAL","object_user_defined":true,"user_defined":false,"children":[{"object_name":"applications","object_name_show_schema":"applications","object_type":"TABLE","object_id":"t3754","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]}]}],"used_by":[]},"imported_at":null};