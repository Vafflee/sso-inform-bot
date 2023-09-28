export type TaskProperties = {
  "Фото":              PersonSelect;
  "Дедлайн":           DateSelect;
  "Ссылка на пост":    UrlSelect;
  "Статус":            SelectSelect;
  "Текст":             PersonSelect;
  "Предыдущий пост":   RelationSelect;
  "Ответственный":     PersonSelect;
  "Начало":            DateSelect;
  "Тип":               SelectSelect;
  "Следующий пост":    RelationSelect;
  "Дизайн":            PersonSelect;
  "Name":              Name;
}

export type Name = {
  id:    string;
  type:  string;
  title: NameTitle[];
}

export type NameTitle = {
  type:        string;
  text:        Text;
  annotations: Annotations;
  plain_text:  string;
  href:        null;
}

export type Annotations = {
  bold:          boolean;
  italic:        boolean;
  strikethrough: boolean;
  underline:     boolean;
  code:          boolean;
  color:         string;
}

export type Text = {
  content: string;
  link:    null;
}

export type DateSelect = {
  id:   string;
  type: string;
  date: NotionDate;
}

export type NotionDate = {
  start:     string;
  end:       null;
  time_zone: null;
}

export type PersonSelect = {
  id:     string;
  type:   string;
  people: Person[];
}

export type Person = {
  object: string,
  id: string,
  name: string,
  avatar_url: string,
  type: string,
  person: {
    email: string
  }[] 
}

export type RelationSelect = {
  id:       string;
  type:     string;
  relation: Array<any[]>;
  has_more: boolean;
}

export type UrlSelect = {
  id:   string;
  type: string;
  url:  string;
}

export type SelectSelect = {
  id:     string;
  type:   string;
  select: Select;
}

export type Select = {
  id:    string;
  name:  string;
  color: string;
}