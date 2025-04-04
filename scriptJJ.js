// Объявим массив событий глобально, чтобы был доступен в функции фильтрации.
const events = [
    {
      image: '/foto/6event_518898207.webp.svg',
      date: 'WED, MAR 13 • 11:30 PM UTC',
      title: 'All Nations - Manhattan Missions Church Bible Study',
      // В category укажем текст, включающий дистанцию, например "Hobbies and Passions (5 km)"
      category: 'Hobbies and Passions (5 km)',
      attendees: '69 attendees',
      // Тип события: "online Event" или "offline Event"
      type: 'online Event'
    },
    {
      image: '/foto/5event_519218942.webp.svg',
      date: 'SAT, MAR 21 • 7:30 PM UTC',
      title: 'INFJ Personality Type - Coffee Shop Meet & Greet',
      category: 'Hobbies and Passions (25 km)',
      attendees: '99 attendees',
      type: 'offline Event'
    },
    {
      image: '/foto/4event_519111663.webp.svg',
      date: 'WED, MAR 13 • 11:30 PM UTC',
      title: 'NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Engagement',
      category: 'Hobbies and Passions (15 km)',
      attendees: '43 attendees + 2 spots left',
      type: 'offline Event'
    },
    {
      image: '/foto/2event_519549716.webp.svg',
      date: 'MON, MAR 16 • 11:30 PM UTC',
      title: 'Dump writing group weekly meetup',
      category: 'Technology',
      attendees: '17 attendees',
      type: 'online Event'
    },
    {
      image: '/foto/1event_519527424.webp.svg',
      date: 'WED, MAR 13 • 11:30 PM UTC',
      title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
      category: 'Hobbies and Passions (25 km)',
      attendees: '29 attendees',
      type: 'online Event'
    },
    {
        image: '/foto/6event_518898207.webp.svg',
        date: 'WED, MAR 13 • 11:30 PM UTC',
        title: 'All Nations - Manhattan Missions Church Bible Study',
        category: 'Hobbies and Passions (5 km)',
        attendees: '9 attendees',
        type: 'offline Event'
      },
      {
        image: '/foto/3event_519405643.webp.svg',
        date: 'WED, MAR 13 • 11:30 PM UTC',
        title: 'Book 40+ Appointments Per Month Using AI and Automation',
        category: 'Technology',
        attendees: '49 attendees',
        type: 'online Event'
      }
  ];
  
  // Функция, которая отображает (рендерит) карточки событий
  function renderEvents() {
    const eventsList = document.querySelector('.events-list');
    
    // Очищаем контейнер перед рендером
    eventsList.innerHTML = '';
  
    // Считываем выбранные значения из селектов
    const typeValue = document.getElementById('typeFilter').value;       // online/offline
    const distanceValue = document.getElementById('distanceFilter').value; // '5 km', '15 km', '25 km' или ''
    const categoryValue = document.getElementById('categoryFilter').value; // 'Hobbies and Passions', 'Technology' или ''
  
    // Фильтруем массив событий по выбранным критериям
    const filteredEvents = events.filter(event => {
      // 1. Фильтр по типу
      const matchType = !typeValue || event.type === typeValue;
  
      // 2. Фильтр по дистанции (ищем в category подстроку '(5 km)', '(15 km)', '(25 km)' и т.д.)
      // Если distanceValue пустое, пропускаем фильтр. Иначе проверяем, что category содержит выбранную дистанцию.
      const matchDistance = !distanceValue || event.category.includes(distanceValue);
  
      // 3. Фильтр по категории (например, 'Hobbies and Passions' или 'Technology')
      // Если categoryValue пустое, пропускаем фильтр. Иначе проверяем, что в строке event.category есть это слово.
      const matchCategory = !categoryValue || event.category.includes(categoryValue);
  
      // Возвращаем true, только если все три условия совпадают
      return matchType && matchDistance && matchCategory;
    });
  
    // Теперь отрисовываем (рендерим) только отфильтрованные события
    filteredEvents.forEach(event => {
      // Создаем корневой элемент карточки
      const card = document.createElement('article');
      card.classList.add('event-card');
  
      // Блок с изображением события
      const eventImageDiv = document.createElement('div');
      eventImageDiv.classList.add('event-image');
      const img = document.createElement('img');
      img.src = event.image;
      img.alt = 'Event Image';
      eventImageDiv.appendChild(img);
  
      // Блок с деталями события
      const eventDetailsDiv = document.createElement('div');
      eventDetailsDiv.classList.add('event-details');
  
      const eventDate = document.createElement('div');
      eventDate.classList.add('event-date');
      eventDate.textContent = event.date;
  
      const eventTitle = document.createElement('h2');
      eventTitle.classList.add('event-title');
      eventTitle.textContent = event.title;
  
      const eventMeta = document.createElement('div');
      eventMeta.classList.add('event-meta');
  
      const eventCategory = document.createElement('span');
      eventCategory.classList.add('event-category');
      eventCategory.textContent = event.category;
  
      const eventAttendees = document.createElement('span');
      eventAttendees.classList.add('event-attendees');
      eventAttendees.textContent = event.attendees;
  
      const eventType = document.createElement('span');
      eventType.classList.add('event-attendees');
      eventType.textContent = event.type;
  
      // Собираем блок метаданных
      eventMeta.appendChild(eventCategory);
      eventMeta.appendChild(eventAttendees);
      eventMeta.appendChild(eventType);
  
      // Собираем карточку
      eventDetailsDiv.appendChild(eventDate);
      eventDetailsDiv.appendChild(eventTitle);
      eventDetailsDiv.appendChild(eventMeta);
      card.appendChild(eventImageDiv);
      card.appendChild(eventDetailsDiv);
  
      // Добавляем карточку в контейнер
      eventsList.appendChild(card);
    });
  }
  
  // При загрузке DOM сразу рендерим все события
  document.addEventListener('DOMContentLoaded', function() {
    // Рендерим все события первый раз
    renderEvents();
  
    // Вешаем обработчики на селекты для динамической фильтрации
    document.getElementById('typeFilter').addEventListener('change', renderEvents);
    document.getElementById('distanceFilter').addEventListener('change', renderEvents);
    document.getElementById('categoryFilter').addEventListener('change', renderEvents);
  });
  