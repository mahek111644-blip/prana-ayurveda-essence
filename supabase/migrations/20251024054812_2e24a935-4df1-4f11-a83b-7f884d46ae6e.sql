-- Insert doctors first
INSERT INTO public.doctors (id, name, title, specialization, bio, experience_years, image_url, certifications) VALUES
(
  '11111111-1111-1111-1111-111111111111',
  'Dr. Priya Sharma',
  'BAMS, MD (Ayurveda)',
  'Panchakarma & Detoxification',
  'Dr. Priya Sharma is a renowned Ayurvedic practitioner with over 15 years of experience in Panchakarma therapies and holistic wellness.',
  15,
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  ARRAY['Board Certified Ayurvedic Physician', 'Panchakarma Specialist', 'Yoga Therapist']
),
(
  '22222222-2222-2222-2222-222222222222',
  'Dr. Rajesh Kumar',
  'BAMS, PhD',
  'Herbal Medicine & Nutrition',
  'Dr. Rajesh Kumar specializes in herbal formulations and nutritional counseling based on Ayurvedic principles.',
  12,
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  ARRAY['Ayurvedic Herbalist', 'Nutritional Consultant', 'Research Scholar']
);

-- Insert 7 detailed articles with doctor verification
INSERT INTO public.articles (
  title, 
  slug, 
  excerpt, 
  content, 
  category, 
  image_url, 
  read_time, 
  doctor_id,
  tags,
  published_at
) VALUES
(
  'The Science Behind Ashwagandha: Ancient Wisdom Meets Modern Research',
  'ashwagandha-modern-research',
  'Discover how modern science validates the traditional uses of Ashwagandha for stress relief and cognitive enhancement.',
  'Ashwagandha (Withania somnifera) has been a cornerstone of Ayurvedic medicine for over 3,000 years. Known as the "Indian Ginseng," this powerful adaptogenic herb has gained significant attention in modern scientific research for its remarkable health benefits.

Recent clinical studies have demonstrated Ashwagandha''s effectiveness in reducing cortisol levels, the primary stress hormone in the body. A landmark study published in the Journal of Clinical Psychiatry found that participants taking Ashwagandha extract experienced a 27.9% reduction in cortisol levels compared to the placebo group.

The cognitive benefits of Ashwagandha are equally impressive. Research indicates that regular consumption can enhance memory, improve reaction time, and boost overall cognitive function. The withanolides, bioactive compounds found in Ashwagandha, have been shown to promote the growth of nerve cells and protect brain cells from harmful free radicals.

For those struggling with sleep disorders, Ashwagandha offers natural relief. Studies have shown that it can improve sleep quality and help individuals fall asleep faster. The herb works by calming the nervous system and promoting relaxation without causing drowsiness during the day.

Athletic performance and muscle recovery also benefit from Ashwagandha supplementation. Research published in the Journal of the International Society of Sports Nutrition found that it significantly increased muscle strength and size while reducing exercise-induced muscle damage.

When choosing an Ashwagandha supplement, opt for high-quality extracts standardized to contain at least 5% withanolides. The recommended dosage typically ranges from 300-500mg taken twice daily with meals.',
  'Research',
  'https://images.unsplash.com/photo-1609038677224-c8ae18b08b96?w=800&h=600&fit=crop',
  8,
  '11111111-1111-1111-1111-111111111111',
  ARRAY['ashwagandha', 'stress relief', 'cognitive health', 'adaptogen'],
  NOW() - INTERVAL '5 days'
),
(
  'Ayurvedic Morning Routines for Optimal Health',
  'ayurvedic-morning-routines',
  'Transform your mornings with time-tested Ayurvedic practices that promote balance and vitality throughout the day.',
  'The ancient science of Ayurveda places great emphasis on the morning routine, known as Dinacharya. These practices align your body with natural rhythms and set a positive tone for the entire day.

Begin your day by waking up during Brahma Muhurta, approximately 90 minutes before sunrise. This time is considered most conducive to spiritual practices and offers the calmest, most sattvic energy of the day. Start by drinking a glass of warm water to flush toxins accumulated overnight and stimulate digestion.

Tongue scraping is an essential practice that removes bacteria and toxins from the tongue surface. Use a copper or stainless steel tongue scraper, gently moving from back to front 7-10 times. This simple practice enhances taste perception and promotes oral health.

Oil pulling, or Gandusha, involves swishing a tablespoon of sesame or coconut oil in your mouth for 10-20 minutes. This ancient detoxification technique removes harmful bacteria, strengthens gums, and promotes overall oral health. Follow with brushing your teeth using natural herbal powders.

Self-massage with warm oil, known as Abhyanga, nourishes the skin, calms the nervous system, and promotes circulation. Choose oils based on your dosha: sesame oil for Vata, coconut oil for Pitta, and mustard oil for Kapha. Massage in circular motions, paying special attention to joints and feet.

Practice gentle yoga asanas and pranayama (breathing exercises) to awaken your body and mind. Sun Salutations are particularly beneficial, as they energize all body systems while promoting flexibility and strength.

Conclude your morning routine with meditation or mindful contemplation. Even 10-15 minutes of quiet reflection can significantly reduce stress and enhance mental clarity throughout the day.',
  'Lifestyle',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  6,
  '11111111-1111-1111-1111-111111111111',
  ARRAY['morning routine', 'dinacharya', 'wellness', 'daily practices'],
  NOW() - INTERVAL '10 days'
),
(
  'Understanding Your Dosha: A Complete Guide to Ayurvedic Body Types',
  'understanding-doshas',
  'Learn about the three doshas and how understanding your unique constitution can guide your wellness journey.',
  'The concept of doshas is fundamental to Ayurvedic medicine. The three doshas—Vata, Pitta, and Kapha—represent different combinations of the five elements and govern all physical and mental processes in the body.

Vata dosha, composed of air and space elements, governs movement, communication, and creativity. Vata individuals tend to be slender, energetic, and quick-thinking. When balanced, they are creative and enthusiastic. Imbalance may manifest as anxiety, insomnia, and digestive issues. To balance Vata, incorporate warm, grounding foods, maintain regular routines, and practice calming activities.

Pitta dosha, made of fire and water elements, controls digestion, metabolism, and transformation. Pitta types typically have medium builds, strong digestion, and sharp intellects. Balanced Pitta brings courage and intelligence, while imbalance can cause inflammation, anger, and skin issues. Cool Pitta with cooling foods, avoid excessive heat, and practice moderation.

Kapha dosha, combining earth and water elements, provides structure, stability, and lubrication. Kapha individuals often have larger frames, steady energy, and calm dispositions. Balanced Kapha offers strength and compassion, while imbalance leads to weight gain, lethargy, and congestion. Balance Kapha through regular exercise, light foods, and stimulating activities.

Most people are a combination of two doshas, with one typically dominant. Understanding your unique constitution helps you make informed choices about diet, lifestyle, and wellness practices. Seasonal changes and life stages also influence dosha balance, requiring adjustments to maintain optimal health.

Consult with an Ayurvedic practitioner to determine your prakriti (natural constitution) and vikriti (current state of balance). This knowledge empowers you to make choices that support your individual path to wellness and vitality.',
  'Education',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  12,
  '22222222-2222-2222-2222-222222222222',
  ARRAY['doshas', 'vata', 'pitta', 'kapha', 'constitution'],
  NOW() - INTERVAL '15 days'
),
(
  'Turmeric: The Golden Spice of Ayurveda',
  'turmeric-golden-spice',
  'Explore the healing properties of turmeric and how this ancient superfood supports modern wellness.',
  'Turmeric, known as Haridra in Sanskrit, has been revered in Ayurvedic medicine for thousands of years. This golden spice contains curcumin, a powerful compound with remarkable anti-inflammatory and antioxidant properties.

Modern research validates Ayurvedic wisdom about turmeric''s benefits. Studies show that curcumin can modulate inflammatory pathways at the molecular level, making it effective for conditions ranging from arthritis to heart disease. The anti-inflammatory effects rival those of some pharmaceutical medications, without the side effects.

Turmeric supports liver health and aids in detoxification processes. Ayurveda considers it a powerful blood purifier that promotes healthy skin from within. Regular consumption can help manage skin conditions like acne, eczema, and psoriasis.

The digestive benefits of turmeric are significant. It stimulates bile production, which aids fat digestion and helps prevent bloating and gas. Turmeric also supports the intestinal microbiome, promoting healthy gut bacteria balance.

For cognitive health, curcumin crosses the blood-brain barrier and has been shown to have neuroprotective properties. Research suggests it may help prevent cognitive decline and support brain health as we age.

To maximize absorption, always consume turmeric with black pepper and healthy fats. The piperine in black pepper increases curcumin bioavailability by up to 2000%. Golden milk, a traditional Ayurvedic beverage combining turmeric with warm milk, black pepper, and healthy fats, is an excellent way to incorporate this healing spice into your daily routine.',
  'Herbs & Nutrition',
  'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=600&fit=crop',
  7,
  '22222222-2222-2222-2222-222222222222',
  ARRAY['turmeric', 'curcumin', 'anti-inflammatory', 'herbs'],
  NOW() - INTERVAL '20 days'
),
(
  'Ayurvedic Approach to Stress Management',
  'ayurvedic-stress-management',
  'Learn how Ayurvedic principles can help you manage stress naturally and maintain emotional balance.',
  'In today''s fast-paced world, stress has become a significant health concern. Ayurveda offers a comprehensive approach to managing stress that addresses root causes rather than just symptoms.

According to Ayurveda, stress primarily aggravates Vata dosha, leading to anxiety, restlessness, and scattered thinking. The key to managing stress lies in grounding and calming practices that pacify Vata while supporting overall balance.

Herbal adaptogens play a crucial role in stress management. Ashwagandha helps the body adapt to stressors while promoting calm and clarity. Brahmi (Bacopa monnieri) supports cognitive function and mental resilience. Jatamansi (Spikenard) calms the nervous system and promotes restful sleep.

Dietary adjustments are equally important. Favor warm, cooked, nourishing foods that are easy to digest. Include healthy fats like ghee and coconut oil. Avoid excessive caffeine, processed foods, and irregular eating patterns that can aggravate stress.

Pranayama, or breathing exercises, offer immediate stress relief. Nadi Shodhana (alternate nostril breathing) balances the nervous system and calms the mind. Bhramari (bee breath) reduces anxiety and promotes relaxation. Practice these techniques for 10-15 minutes daily.

Establish a regular daily routine that includes adequate sleep, regular meal times, and periods of rest. Vata thrives on consistency, and maintaining regular rhythms significantly reduces stress levels.

Meditation and mindfulness practices cultivate inner peace and emotional resilience. Even brief daily meditation sessions can dramatically reduce stress hormones and promote a sense of wellbeing. Combine meditation with gentle yoga asanas for optimal stress relief.',
  'Mind & Spirit',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
  10,
  '11111111-1111-1111-1111-111111111111',
  ARRAY['stress management', 'mental health', 'adaptogens', 'pranayama'],
  NOW() - INTERVAL '25 days'
),
(
  'Seasonal Eating According to Ayurveda',
  'seasonal-eating-ayurveda',
  'Discover how eating in harmony with the seasons optimizes digestion, immunity, and overall vitality.',
  'Ayurveda emphasizes eating according to seasonal rhythms, a practice called Ritucharya. This approach aligns our diet with natural cycles, supporting optimal health throughout the year.

Spring (Kapha Season): As the earth warms and snow melts, Kapha accumulates in the body. Focus on light, dry, and warm foods. Favor pungent, bitter, and astringent tastes. Include leafy greens, legumes, and warming spices like ginger and black pepper. Reduce heavy, oily foods and dairy products.

Summer (Pitta Season): Heat increases Pitta dosha, requiring cooling, hydrating foods. Emphasize sweet, bitter, and astringent tastes. Choose fresh fruits, cucumber, coconut, mint, and cilantro. Reduce hot spices, sour foods, and excessive salt. Stay well-hydrated with cooling beverages.

Fall (Vata Season): Increasing cold and dryness aggravate Vata. Ground yourself with warm, moist, and nourishing foods. Favor sweet, sour, and salty tastes. Include root vegetables, whole grains, healthy fats, and warming spices. Establish regular meal times and warm food preparation.

Winter (Vata-Kapha Season): Cold weather requires warming, substantial foods. Focus on building strength and immunity with nourishing soups, stews, and whole grains. Include warming spices like cinnamon, cardamom, and cloves. Healthy fats like ghee provide insulation and nourishment.

Transitional periods between seasons require special attention. Cleansing practices and lighter eating help the body adjust to changing weather patterns. Avoid contradictory foods that confuse digestion during these times.

Local, seasonal produce naturally provides what our bodies need. By eating foods that grow naturally during each season, we align with nature''s wisdom and support our health effortlessly.',
  'Nutrition',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
  9,
  '22222222-2222-2222-2222-222222222222',
  ARRAY['seasonal eating', 'ritucharya', 'nutrition', 'doshas'],
  NOW() - INTERVAL '30 days'
),
(
  'The Power of Triphala: Ayurveda''s Ancient Superfood',
  'triphala-ancient-superfood',
  'Uncover the benefits of Triphala, a revered Ayurvedic formulation that supports digestion, detoxification, and rejuvenation.',
  'Triphala, meaning "three fruits," is one of the most respected and widely used formulations in Ayurvedic medicine. This powerful combination of Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula) offers comprehensive health benefits.

Each fruit in Triphala contributes unique properties. Amalaki is rich in vitamin C and antioxidants, supporting immune function and tissue rejuvenation. It balances all three doshas with particular benefit for Pitta. Bibhitaki eliminates excess mucus and supports respiratory health, particularly benefiting Kapha dosha. Haritaki, called the "king of medicines," promotes healthy elimination and supports digestive health, especially for Vata.

Triphala''s gentle detoxifying action makes it suitable for long-term use. Unlike harsh laxatives, it strengthens the digestive system while promoting regular elimination. It cleanses the colon, removes toxins, and supports healthy gut flora without creating dependency.

Research demonstrates Triphala''s antioxidant capacity exceeds many individual superfoods. Its ability to scavenge free radicals protects cells from oxidative damage, supporting healthy aging and disease prevention. Studies also show anti-inflammatory, antimicrobial, and immune-modulating properties.

For eye health, Triphala acts as a rasayana (rejuvenative). Traditional use includes washing the eyes with Triphala water to improve vision and prevent eye diseases. Modern research supports its protective effects on eye tissues.

Take Triphala on an empty stomach, either before bed or first thing in the morning. Start with a small dose and gradually increase as needed. Mix the powder with warm water or take in capsule form. Consistency is key—use Triphala daily for at least three months to experience its full rejuvenating effects.',
  'Herbs & Supplements',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
  8,
  '11111111-1111-1111-1111-111111111111',
  ARRAY['triphala', 'digestion', 'detox', 'herbal medicine'],
  NOW() - INTERVAL '35 days'
);