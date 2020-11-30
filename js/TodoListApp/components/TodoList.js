import store from '../store/index.js'
import Component from '../lib/component.js'

export default class TodoList extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('#todo-list')
    })
  }
  render () {
    let self = this;
    // self.element.innerHTML = `
    //   <ul id="todo-list" class="todo-list">
    //     <li>
    //       <div class="view">
    //         <input class="toggle" type="checkbox"/>
    //         <label class="label">새로운 타이틀</label>
    //         <button class="destroy"></button>
    //       </div>
    //       <input class="edit" value="새로운 타이틀" />
    //     </li>
    //     <li class="editing">
    //       <div class="view">
    //         <input class="toggle" type="checkbox" />
    //         <label class="label">완료된 타이틀</label>
    //         <button class="destroy"></button>
    //       </div>
    //       <input class="edit" value="완료된 타이틀" />
    //     </li>
    //     <li class="completed">
    //       <div class="view">
    //         <input class="toggle" type="checkbox" checked/>
    //         <label class="label">완료된 타이틀</label>
    //         <button class="destroy"></button>
    //       </div>
    //       <input class="edit" value="완료된 타이틀" />
    //     </li>
    //   </ul>
    // `

    self.element.innerHTML = `
      <ul id="todo-list" class="todo-list">
      ${store.state.list.map(item => {
        return `
          <li data-id="${item.id}">
            <div class="view">
              <input class="toggle" type="checkbox" ${(item.complete) ? 'checked' : ''} />
              <label class="label">${item.context}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="${item.context}" />
          </li>
        `
      }).join('')}
      </ul>
    `
    self.element.addEventListener('click', (ev) => {
      if (ev.target.className === 'destroy') {
        // 본문이 같지만 다른 Todo인 경우가 있을수 있으므로, ID를 사용할 것.
        const parentElement = ev.target.closest('li')
        const id = parentElement.dataset.id
        console.log('', id, Number.isInteger(id), parentElement);
        if (id !== undefined) store.dispatch('deleteItem', Number(id))

        // const label = parentElement.querySelector('.label').innerHTML
        // parent.deleteItem(parentElement)
    }
    })
  }
}