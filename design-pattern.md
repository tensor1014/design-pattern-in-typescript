设计模式

- 定义
- 创建型模式
  - 抽象工厂 [`Abstract factory`](#abstract-factory) (意图、适用性、结构、参与者) 
  - 生成器 `Builder`
  - 工厂模式 `Factory Method`
  - 原型 `Prototype`
  - 单例 `Singleton`
- 结构型模式
  - 适配器 `Adapter`
  - 桥接 `Bridge`
  - 组成 `Composite`
  - 装饰 `Decorator`
  - 外观 `Facade`
  - 享元 `Flyweight`
  - 代理 `Proxy`
- 行为模式
  - 命令 `Command`
  - 解释器 `Interpreter`
  - 迭代器 `Iterator`
  - 中介者 `Mediator`
  - 备忘录 `Memento`
  - 观察者 `Observer`
  - 状态 `State`
  - 策略 `Strategy`
  - 模版方法 `Template Method`
  - 访问者 `Visitor`

## 定义
### 类的继承结构
表现在UML中为：泛化(`generalization`)与实现(`realize`)：

泛化关系用一条带空心箭头的直接表示 **`extends`**
<img src="http://yuml.me/diagram/plain/class/extends, [SUV]-^[Car]" />
实现关系用一条带空心箭头的虚线表示**`implements`**
<img src="http://yuml.me/diagram/plain/class/implements, [Car]-.-^[Vehicle], [Bicycle]-.-^[Vehicle]"/>

### 聚合关系(aggregation)
聚合关系用一条带空心菱形箭头的直线表示，如下图表示A聚合到B上，或者说B由A组成，整体和部分不是强依赖的，即使整体不存在了，部分仍然存在
<img src="http://yuml.me/diagram/plain/class/aggregation, [Wheel]-<>[Bicycle],[Chair]-+[Bicycle]"/>  


### 组合关系（composition)

组合关系用一条带实心菱形箭头直线表示，如下图表示A组成B，或者B由A组成:
<img src="http://yuml.me/diagram/plain/class/composition, [A]-++[B]"/>

但组合关系是一种强依赖的特殊聚合关系，如果整体不存在了，则部分也不存在了；例如， 公司不存在了，部门也将不存在了；

###关联关系(association)
关联关系是用一条直线表示的；它描述不同类的对象之间的结构关系；它是一种静态关系， 通常与运行状态无关，一般由常识等因素决定的；它一般用来定义对象之间静态的、天然的结构； 所以，关联关系是一种“强关联”的关系；

比如，乘车人和车票之间就是一种关联关系；学生和学校就是一种关联关系；

关联关系默认不强调方向，表示对象间相互知道；如果特别强调方向，如下图，表示A知道B，但 B不知道A；
在最终代码中，关联对象通常是以成员变量的形式实现的；
![association](http://yuml.me/diagram/plain/class/[A]->[B])

###依赖关系(dependency)

依赖关系是用一套带箭头的虚线表示的；如下图表示A依赖于B；他描述一个对象在运行期间会用到另一个对象的关系
与关联关系不同的是，它是一种临时性的关系，通常在运行期间产生，并且随着运行时的变化； 依赖关系也可能发生变化；
显然，依赖也有方向，双向依赖是一种非常糟糕的结构，我们总是应该保持单向依赖，杜绝双向依赖的产生；

注：在最终代码中，依赖关系体现为类构造方法及类方法的传入参数，箭头的指向为调用关系；依赖关系除了临时知道对方外，还是“使用”对方的方法和属性；
![A depends on B](http://yuml.me/diagram/plain/class/[A]-.->[B])


## 创建型模式
### <a name="simple-factory"></a>简单工厂 `Simple Factory`

- 参与者
    - Factory 工厂角色
    - Product 抽象产品角色
    - ConcreteProduct 具体产品角色
- UML  
![Factory](http://yuml.me/diagram/plain/class/
[abstract;Product|-use():void]^-[ConcreteProductA|- use(): void],
[abstract;Product]^-[ConcreteProductB|- use(): void], 
[ConcreteProductA]<-.-[Factory|- createProduct(string: A\\|B): Product], 
[ConcreteProductB]<-.-[Factory]
)

### <a name="factory"></a>工厂方法 `Factory Method`

- 参与者
    - AbstractProduct
    - ConcreteProduct
    - AbstractFactory
    - ConcreteFactory
    - Client
- UML  
![Factory](http://yuml.me/diagram/plain/class/
[abstract;Product|- use(): void]^-.-[ConcreteProduct|- use(): void],
[abstract;Factory|+ factoryMethod(): Product]^-.-[ConcreteFactory|+ factoryMethod: Product],
[ConcreteProduct]<-.-[ConcreteFactory],
[return new ConcreteProduct();]-.-[ConcreteFactory]
)



### <a name="abstract-factory"></a>抽象工厂 `Abstract Factory`
- 意图： 提供一个创建一系列相关或相互依赖对象的接口，而无需指定他们具体的类
- 适用性
  - 一个系统要独立于它的产品的创建、组合和表示时
  - 一个系统要由多个产品系列中的一个来配置时
  - 当你要强调一系列相关的产品对象的设计以便进行联合使用时
  - 当你提供一个产品类库，而只想显示它们的接口而不是实现时
- 结构
- 参与者
  - AbstractFactory
  - ConcreteFactory
  - AbstractProduct
  - ConcreteProduct
  - Client
