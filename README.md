Команды: \
*запуск проекта: npm run dev \
*запуск storybook: npm run storybook \
\
Описание компонентов Counter и Button.
\
Компонент Counter поддерживает различные размеры, цвета, метки и анимацию пульсации. \
Компонент Counter принимает следующие пропсы: \
\
* color: Цвет компонента. Возможные значения: 'primary', 'secondary', 'altPrimary', 'altSecondary'. По умолчанию 'primary'. \
* size: Размер компонента. Возможные значения: 'extraSmall', 'small', 'medium', 'large', 'extraLarge'. По умолчанию 'medium'. \
* label: Текст, отображаемый внутри компонента. Доступна только для размеров 'medium', 'large', 'extraLarge'. \
* pulse: Флаг для включения анимации пульсации. Доступен только для размеров 'extraSmall', 'small'. \
* stroke: Флаг для включения обводки. \
* className: Дополнительные классы для стилизации. \
\
Компонент Button представляет собой универсальную кнопку. \
Он поддерживает различные размеры, цвета, состояния загрузки и отключения, а также позволяет добавлять дочерние элементы, такие как текст, счетчик и группу текст + счетчик. \
Компонент Button создан с использованием подхода Compound Components. Компонент включает в себя несколько внутренних компонентов, \
которые можно использовать для расширения функциональности кнопки: \
\
* Button.ContentGroup: Контейнер для группировки контента внутри кнопки. \
* Button.Counter: Компонент для отображения счетчика внутри кнопки. \
* Button.Label: Компонент для отображения текста внутри кнопки. \
\
Основные свойства: \
\
* color: Цвет кнопки. Возможные значения: 'primary', 'secondary'. По умолчанию 'primary'. \
* size: Размер кнопки. Возможные значения: 'small', 'medium', 'large'. По умолчанию 'medium'. \
* loading: Флаг, указывающий, находится ли кнопка в состоянии загрузки. По умолчанию false. \
* disabled: Флаг, указывающий, отключена ли кнопка. По умолчанию false. \
* className: Дополнительные классы для стилизации. \
* children: Дочерние элементы, которые будут отображаться внутри кнопки. \

