import { computed, observable } from 'mobx'


class DiaryStore {

  @observable title = 'title-init'
  @observable article = 'article-init'

  createArticle(title, article) {
    this.title.push(title)
    this.article.push(article)
  }

}

const store = new DiaryStore()

export default store
