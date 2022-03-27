window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3759","name":"conversations","subtype":"COLLECTION","is_user_defined":true,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"VHN","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"conversations"},{"field":"Type","value":"Collection"},{"field":"Module","value":[{"_type":"link","name":"vhn","id":"m117"}]}],"columns":[{"id":"column-34889","object_id":"column-34889","name":"_id","name_without_path":"_id","description":null,"is_pk":false,"is_identity":false,"data_type":"Id","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34890","object_id":"column-34890","name":"createdBy","name_without_path":"createdBy","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34891","object_id":"column-34891","name":"messages","name_without_path":"messages","description":null,"is_pk":false,"is_identity":false,"data_type":"String[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"ARRAY","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34892","object_id":"column-34892","name":"participants","name_without_path":"participants","description":null,"is_pk":false,"is_identity":false,"data_type":"Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT_ARRAY","is_user_defined":true,"children":[{"id":"column-34897","object_id":"column-34897","name":"participants.conversationDisplayName","name_without_path":"conversationDisplayName","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34898","object_id":"column-34898","name":"participants.archived","name_without_path":"archived","description":null,"is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34899","object_id":"column-34899","name":"participants.unreadCount","name_without_path":"unreadCount","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34900","object_id":"column-34900","name":"participants.lastMessageType","name_without_path":"lastMessageType","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34901","object_id":"column-34901","name":"participants.lastMessage","name_without_path":"lastMessage","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34902","object_id":"column-34902","name":"participants.user","name_without_path":"user","description":null,"is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34903","object_id":"column-34903","name":"participants.lastMessageAt","name_without_path":"lastMessageAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"participants","level":2,"item_type":"FIELD","is_user_defined":true,"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34893","object_id":"column-34893","name":"createdAt","name_without_path":"createdAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34894","object_id":"column-34894","name":"updatedAt","name_without_path":"updatedAt","description":null,"is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34895","object_id":"column-34895","name":"__v","name_without_path":"__v","description":null,"is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34896","object_id":"column-34896","name":"applications","name_without_path":"applications","description":null,"is_pk":false,"is_identity":false,"data_type":"String[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":true,"children":[],"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_applications_conversations","title":"","description":"","is_user_defined":true,"foreign_table":"conversations","foreign_table_show_schema":"conversations","foreign_table_verbose":"conversations","foreign_table_verbose_show_schema":"conversations","foreign_table_object_id":"t3759","primary_table":"applications","primary_table_show_schema":"applications","primary_table_verbose":"applications","primary_table_verbose_show_schema":"applications","primary_table_object_id":"t3754","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_conversations","title":"","description":"","is_user_defined":true,"foreign_table":"conversations","foreign_table_show_schema":"conversations","foreign_table_verbose":"conversations","foreign_table_verbose_show_schema":"conversations","foreign_table_object_id":"t3759","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"mx","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_users_conversations","title":"","description":"","is_user_defined":true,"foreign_table":"conversations","foreign_table_show_schema":"conversations","foreign_table_verbose":"conversations","foreign_table_verbose_show_schema":"conversations","foreign_table_object_id":"t3759","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t3751","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}},{"name":"fk_conversations_messages","title":"","description":"","is_user_defined":true,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t3760","primary_table":"conversations","primary_table_show_schema":"conversations","primary_table_verbose":"conversations","primary_table_verbose_show_schema":"conversations","primary_table_object_id":"t3759","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":null,"foreign_column_path":null,"foreign_column":null}],"custom_fields":{}}],"unique_keys":[],"triggers":[],"dependencies":{"uses":[{"object_name":"conversations","object_name_show_schema":"conversations","object_type":"TABLE","object_id":"t3759","type":"NORMAL","object_user_defined":true,"user_defined":false,"children":[{"object_name":"applications","object_name_show_schema":"applications","object_type":"TABLE","object_id":"t3754","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"mx","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t3751","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]}]}],"used_by":[{"object_name":"conversations","object_name_show_schema":"conversations","object_type":"TABLE","object_id":"t3759","type":"NORMAL","object_user_defined":true,"user_defined":false,"children":[{"object_name":"messages","object_name_show_schema":"messages","object_type":"COLLECTION","object_id":"t3760","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":true,"user_defined":true,"children":[]}]}]},"imported_at":null};