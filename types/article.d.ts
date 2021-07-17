export interface IContentDocument extends Record<string, any> {
  dir: string
  path: string
  extension: '.md' | '.json' | '.yaml' | '.xml' | '.csv' | string
  slug: string
  createdAt: Date
  updatedAt: String
}

export interface BlogPost extends IContentDocument {
  title: string
  date: string
  tags?: Array<string>
}
