# MVC 모델 적용 
## 느낀점 
- 각 클래스의 메소드가 일치되어 있지 않아서 이해하기 힘이든다. 예를 들면 
    || Controller.showAll
    || Model.read() 
    || View.render('showEntries')
  위의 부분이 동일하게 read라고 작성을 한다면 이해하기 좀더 쉽지 않을까? 

- Template.insert 함수는 View에서 template 변경을 하는 것이 더 직관 적이지 않을까? Template클래스는 string형태 값만 가지고 있고. 
