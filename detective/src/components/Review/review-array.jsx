const reviews = [
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Эльза",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Екатерина",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Анна",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ольга",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Наталья",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Зоя",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Елизавета",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Дарья",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Светлана",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Валентина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Мария",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
  {
    review: "5.0",
    name: "Анастасия",
    stars: 5,
    date: "23.05.2023",
    text: "Очень благодарна Кириллу за подробную консультацию!Он первоклассный специалист своего дела!Обязательно при необходимости я только к нему!!Информация была предоставлена очень оперативно!",
  },
  {
    review: "4.0",
    name: "Ирина",
    stars: 4,
    date: "23.05.2023",
    text: "Качественно, оперативно и профессионально! Благодарю за работу.",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ирина",
    stars: 5,
    date: "23.05.2023",
    text: "Огромное спасибо! С Кириллом очень приятно работать! Быстро и четко решил задачу - нашёл контакты нужного человека. Другие не смогли, хотя пытались и заявляли цену выше!",
  },
  {
    review: "5.0",
    name: "Ева",
    stars: 5,
    date: "23.05.2023",
    text: "Очень быстрая, чёткая, системная работа. Вопрос был решён после обращения в течение часа. Работает максимально динамично и не откладывает работу на следующий день. При совместной работе результат будет 100 %. Рекомендую специалиста!",
  },
];

export default reviews;