const gameRules = [
    {   
        id: 1, 
        content: "Мафия — популярная психологическая игра. Сюжет прост. Мирные жители города, которые устали от распоясавшейся мафии, решают устроить самосуд и убивать преступников. Мафия в ответ объявляет войну с целью уничтожить всех горожан. Команды мафии и мирных жителей играют друг против друга. Мирные жители выигрывают, если вычисляют и «отправляют на смерть» всех мафиози. Мафия выигрывает, если победа мирных жителей математически невозможна." 
    },

    { 
        id: 2, 
        role:"Роль, которую вы можете получить в игре:",
        content: "Мирный (красный). Задача игрока заключается в том, чтобы выявить членов мафии и путем голосования выгнать их из города." ,
        content2:"Доктор (красный). Задача доктора — вылечить выбранного игрока, чтобы не допустить его гибели от выстрела мафии. Просыпается ночью.",
        content3:"Шериф (красный). Цель героя состоит в проверке игроков, с помощью которой он выявляет связь с мафией. Просыпается ночью, действует в пользу мирных.",
        content4:"Мафия (черный).Цель игры для каждого из напарников заключается в том, чтобы изгнать из города максимальное число мирных жителей в дневное время или застрелить их ночью. Мафия выигрывает, если число ее участников становится равным количеству игроков, которые играют за мирных жителей.",
        content5:"Дон (черный). Глава мафии. Он просыпается в ночное время, чтобы проверить наличие удостоверения у игрока, которого считает возможным Шерифом. Дон определяет очередность убийств, совершаемых мафией.",
    },
    { 
        id: 3, 
        content: "Победа мафии наступает, когда количество игроков, которые выполняют роль мирных жителей, равно числу членов мафии.Победа мирных наступает, когда из города изгнаны все представители черных.",
        content1: "Победа мирных наступает, когда из города изгнаны все представители черных", 
        content2: "Места за столом распределяются произвольно, у игроков нет возможности выбора роли. Информация об этом выводится на экран. Чтобы познакомиться с ролью, выбрать карту каждому по очереди будет предоставлено по 10 секунд.",
    },
    { 
        id: 4, 
        role:"Первая ночь",
        content: "Первая ночь позволяет игрокам черной команды познакомиться. Они видят друг друга благодаря включенным камерам, могут открыто общаться в течение 30 секунд. Дон за это время должен показать другим черным сигналом свою роль в игре, определить кого стрелять в ближайшую ночь." ,
        content2:"Днем все игроки видят друг друга через камеры, выражают свое мнение, приводят аргументы, оправдываются, если считают нужным. Судьба выбранной на роль участника мафии кандидатуры решается голосованием. Каждому при этом дается по 1 минуте.",
    },
    { 
        id: 5, 
        role:"Голосование",
        content: "К этому этапу голосования игра переходит после окончания последней оправдательной речи (оправдательная речь даётся всем выставленным на голосование игрокам). На голосование отводится 10 секунд, в течение которых каждый определяет для себя одного игрока – кандидата на изгнание. Отсутствие голоса от кого-либо система автоматически засчитает отданным за последнего выставленного кандидата.",
        content2:"Голосование может не проводиться только в первый день, если представлена только одна кандидатура. В оставшееся время эта процедура проводится обязательно. Игру покидает тот, кому отдано большинство голосов.",
        content3: "Если несколько кандидатов получили одинаковое количество голосов, им дается дополнительное время, чтобы аргументировать свою позицию. Если ситуация повторяется при следующем голосовании, игроки принимают решение о том, чтобы оставить или выгнать обоих участников сразу.",
        content4:"Покинувший игру не раскрывает свою роль до ее завершения. Ему предоставляется 30 секунд, чтобы произнести прощальную речь. ",
    },
    { 
        id: 6, 
        role:"После первой ночи",
        content: "С наступлением ночного времени за исключением первой ночи представители мафии могут сделать выстрел в выбранном окошке нажатием кнопки. Чтобы вывести из игры жертву, черные должны выбрать одного из кандидатов вместе. Если кто-то выбрал на эту роль другого или отказался от выстрела, система фиксирует действие как промах, из-за которого никто не покинет игру по результатам ночи." ,
        content2:"После совершения выстрелов Дон пользуется функцией проверки выбранного игрока, чтобы выявить Шерифа или получить информацию о его роли. После этого к аналогичной процедуре приступает Шериф, но статус Дона таким способом выяснить нельзя. Информация ограничивается причастием к команде черных. Затем к этой же процедуре приступает Доктор.",
        content3:"Если мафия попала, умерший игрок имеет право оставить подозрительных игроков.",
    },
    { 
        id: 4, 
        role:"День сменяется ночью, действия игроков повторяются до момента, когда команда-победитель будет определена.",
        },
  ];

  export default gameRules;