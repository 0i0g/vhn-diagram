window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3756","name":"attachments","subtype":"COLLECTION","is_user_defined":true,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"VHN","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"attachments"},{"field":"Type","value":"Collection"},{"field":"Module","value":[{"_type":"link","name":"vhn","id":"m117"}]}],"columns":[{"id":"column-34843","object_id":"column-34843","name":"_id","name_without_path":"_id","description":null,"is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34844","object_id":"column-34844","name":"description","name_without_path":"description","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34845","object_id":"column-34845","name":"name","name_without_path":"name","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34846","object_id":"column-34846","name":"type","name_without_path":"type","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34847","object_id":"column-34847","name":"size","name_without_path":"size","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34848","object_id":"column-34848","name":"uid","name_without_path":"uid","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34849","object_id":"column-34849","name":"attachmentType","name_without_path":"attachmentType","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34850","object_id":"column-34850","name":"createdBy","name_without_path":"createdBy","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34851","object_id":"column-34851","name":"name_fuzzy","name_without_path":"name_fuzzy","description":null,"is_pk":false,"is_identity":false,"data_type":"String[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"ARRAY","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34852","object_id":"column-34852","name":"createdAt","name_without_path":"createdAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34853","object_id":"column-34853","name":"updatedAt","name_without_path":"updatedAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34854","object_id":"column-34854","name":"__v","name_without_path":"__v","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_applications_attachments","title":"","description":"","is_user_defined":true,"foreign_table":"attachments","foreign_table_show_schema":"attachments","foreign_table_verbose":"attachments","foreign_table_verbose_show_schema":"attachments","foreign_table_object_id":"t3756","primary_table":"applications","primary_table_show_schema":"applications","primary_table_verbose":"applications","primary_table_verbose_show_schema":"applications","primary_table_object_id":"t3754","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_companies_attachments","title":"","description":"","is_user_defined":true,"foreign_table":"attachments","foreign_table_show_schema":"attachments","foreign_table_verbose":"attachments","foreign_table_verbose_show_schema":"attachments","foreign_table_object_id":"t3756","primary_table":"companies","primary_table_show_schema":"companies","primary_table_verbose":"companies","primary_table_verbose_show_schema":"companies","primary_table_object_id":"t3753","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_companies_attachments","title":"","description":"","is_user_defined":true,"foreign_table":"attachments","foreign_table_show_schema":"attachments","foreign_table_verbose":"attachments","foreign_table_verbose_show_schema":"attachments","foreign_table_object_id":"t3756","primary_table":"companies","primary_table_show_schema":"companies","primary_table_verbose":"companies","primary_table_verbose_show_schema":"companies","primary_table_object_id":"t3753","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_attachments","title":"","description":"","is_user_defined":true,"foreign_table":"attachments","foreign_table_show_schema":"attachments","foreign_table_verbose":"attachments","foreign_table_verbose_show_schema":"attachments","foreign_table_object_id":"t3756","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_attachments","title":"","description":"","is_user_defined":true,"foreign_table":"attachments","foreign_table_show_schema":"attachments","foreign_table_verbose":"attachments","foreign_table_verbose_show_schema":"attachments","foreign_table_object_id":"t3756","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_attachments_events","title":"","description":"","is_user_defined":true,"foreign_table":"events","foreign_table_show_schema":"events","foreign_table_verbose":"events","foreign_table_verbose_show_schema":"events","foreign_table_object_id":"t3757","primary_table":"attachments","primary_table_show_schema":"attachments","primary_table_verbose":"attachments","primary_table_verbose_show_schema":"attachments","primary_table_object_id":"t3756","pk_cardinality":"mx","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_attachments_resumes","title":"","description":"","is_user_defined":true,"foreign_table":"resumes","foreign_table_show_schema":"resumes","foreign_table_verbose":"resumes","foreign_table_verbose_show_schema":"resumes","foreign_table_object_id":"t3761","primary_table":"attachments","primary_table_show_schema":"attachments","primary_table_verbose":"attachments","primary_table_verbose_show_schema":"attachments","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"1x","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"attachments","object_name_show_schema":"attachments","object_type":"TABLE","object_id":"t3756","type":"NORMAL","object_user_defined":true,"user_defined":false,"children":[{"object_name":"applications","object_name_show_schema":"applications","object_type":"TABLE","object_id":"t3754","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"companies","object_name_show_schema":"companies","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"companies","object_name_show_schema":"companies","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":true,"user_defined":true,"children":[]}]}],"used_by":[{"object_name":"attachments","object_name_show_schema":"attachments","object_type":"TABLE","object_id":"t3756","type":"NORMAL","object_user_defined":true,"user_defined":false,"children":[{"object_name":"events","object_name_show_schema":"events","object_type":"COLLECTION","object_id":"t3757","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"1x","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"resumes","object_name_show_schema":"resumes","object_type":"COLLECTION","object_id":"t3761","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"1x","object_user_defined":true,"user_defined":true,"children":[]}]}]},"imported_at":null};