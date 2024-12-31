"use client"

import React, { useState } from 'react';
import Link from 'next/link'; // Use Link for routing in Next.js
import { FaCalendarAlt } from 'react-icons/fa'; // Calendar Icon for dates
import { FaRegCommentDots } from 'react-icons/fa'; // Comment Icon for comments
import Image from 'next/image'; // Import Next.js Image component for optimized images

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Achieve Glowing Skin Naturally",
      date: "January 10, 2024",
      description: "Discover natural methods to enhance your skin's radiance with simple skincare routines and home remedies.",
      slug: "glowing-skin-naturally",
      image: "/jlow.jpeg",
      content: `
        <p>Achieving glowing skin is a goal many of us strive for. Countless skincare products are on the market; however, natural ingredients are just as effective. After trying out multiple natural skincare ingredients, I can attest that these ingredients are the real deal! Here are my top five natural ingredients that can help you achieve that glow.</p>
<br/>
<h3><strong>1. Vitamin C Serum</strong></h3>
<p>Vitamin C is a natural substance great for hyperpigmentation, evening skin tone, and giving you a radiant glow. According to <em>Verywell Health</em>, Vitamin C is a powerful antioxidant that helps brighten the skin, reduce hyperpigmentation, and protect against environmental damage.</p>
<p><strong>Personal Experience:</strong> I vividly remember the first time I used a Vitamin C serum. The next morning, I woke to noticeably brighter and more even-toned skin. My friends and family even noticed! I’ve been a fan ever since!</p>
<h4><strong>How to Use:</strong></h4>
<p>Apply a few drops of Vitamin C serum to your face and neck after cleansing and before moisturizing. Use it in the morning to take advantage of its protective UV protection benefits throughout the day.</p>
<p><strong>Brands I recommend:</strong> Olay Super Eye Daily Serum, Plum Vitamin C Serum, etc.</p>
<br/>
<h3><strong>2. Aloe Vera</strong></h3>
<p>Aloe Vera is renowned for its brightening and hydrating properties. It’s perfect for calming irritated skin and providing a boost of moisture. The gel from the Aloe Vera plant can be applied directly to the skin, making it an easy and effective natural remedy.</p>
<p><strong>Personal Experience:</strong> Fruit of the Earth Aloe Vera Gel has been a staple in my simple skincare routine for years. It instantly brightens and hydrates my sunburned skin.</p>
<h4><strong>How to Use:</strong></h4>
<p>Buy organic aloe vera without colors or additives. You can use it as part of your daily night or morning routine to enjoy its calming and hydrating effects.</p>
<br/>
<h3><strong>3. Hyaluronic Acid</strong></h3>
<p>Hyaluronic Acid is a natural substance that our bodies produce to maintain moisture levels. It can hold up to 1,000 times its weight in water, making it an excellent hydrator for the skin.</p>
<p><strong>Personal Experience:</strong> Incorporating Hyaluronic Acid into my skincare routine has been a game-changer. My skin feels more hydrated and smooth, especially during dry climates.</p>
<h4><strong>How to Use:</strong></h4>
<p>Look for serums or moisturizers containing Hyaluronic Acid. Apply it to damp skin to help lock in moisture and achieve a plump, dewy complexion.</p>
<br/>
<h3><strong>4. Castor Oil</strong></h3>
<p>Castor oil is a rich source of fatty acids and Vitamin E, making it a fantastic moisturizer for the skin. It can help reduce inflammation, soften the skin, and promote a healthy glow.</p>
<p><strong>Personal Experience:</strong> I have found castor oil incredibly nourishing for my skin. I use it as an overnight treatment, and I always wake up with softer, more radiant and even-toned skin.</p>
<h4><strong>How to Use:</strong></h4>
<p>Warm a small amount of castor oil between your hands and apply it to your face gently in circular motions. You can use it as an overnight treatment or mix a few drops into your daily moisturizer for added hydration.</p>
<br/>
<h3><strong>5. Rice Water</strong></h3>
<p>Rice water has been used for centuries in Asian skincare routines for its brightening and anti-aging benefits. Packed with vitamins and minerals, it enhances the skin’s texture and clarity.</p>
<p><strong>Personal Experience:</strong> I started using rice water after seeing it on an Instagram reel; the results have been amazing. My skin looks clearer, and my complexion has a healthy and brighter glow.</p>
<h4><strong>How to Use:</strong></h4>
<p>Rinse rice thoroughly, then soak it in water for about 30 minutes. Strain the water and use it as a toner or facial rinse. Store the leftover rice water in the refrigerator for up to a week to use on alternate days.</p>
<br/>
<h3><strong>Conclusion</strong></h3>
<p>Incorporating natural ingredients into your skincare routine can be a game-changer for achieving glowing skin. Whether it’s the brightening power of Vitamin C, the soothing properties of Aloe Vera, or the deep hydration from Hyaluronic Acid, these natural ingredients can help you achieve a radiant complexion without harsh chemicals. Consistency is key, and by using these natural ingredients regularly, you can enjoy a healthy, glowing skin that’s as vibrant as ever!</p>
<br/>
<p><strong>What natural skincare ingredients do you swear by? Share your experiences in the comments below!</strong></p>

      `,
    },
    {
      title: "Top Skincare Products for Winter",
      date: "December 15, 2023",
      description: "A guide to the best skincare products that will keep your skin hydrated and protected during the cold winter months.",
      slug: "top-skincare-products-winter",
      image: "/ter.jpeg",
      content: `
       <h1><strong>Must-Have Skincare Products for Your Winter Skincare Routine:</strong></h1><br/>

<p>Winter is right around the corner, bringing with it cooler weather and the much-needed relief after the heat and humidity of the warmer months. However, while the cool air may feel refreshing, it can also rob your skin of its natural moisture, leaving it dry, dull, and prone to irritation. Without the right products, your skin may lose its glow and hydration during this season. But don't worry, with the right skincare routine, you can fight the winter chill and keep your skin as radiant as ever. Here’s a list of top 7 must-have winter skincare products to help maintain your complexion during the colder months.</p>

<br/><p><strong>1. Moisturisers:</strong></p>
<p>Moisturizers are a staple in every winter skincare regimen. During the winter, the cold air and indoor heating can quickly strip your skin of its natural moisture, leaving it dry and rough. Moisturizers are essential to keep your skin feeling soft, smooth, and hydrated. Opt for moisturizers with a thicker consistency to provide long-lasting hydration and lock in moisture. It's also a good idea to choose a sun control moisturizer with SPF, as this will protect your skin from the harmful effects of the sun, which can still cause damage even in winter. Additionally, consider a vitamin C yogurt night cream, which not only moisturizes but also exfoliates dead skin cells and brightens your complexion while you sleep. This will help maintain a healthy glow, even when you wake up in the morning.</p>

<br/><p><strong>2. Cleansers:</strong></p>
<p>It’s essential to start your winter skincare routine with a gentle yet effective cleanser. Cleansing removes dirt, oil, and impurities that accumulate on your skin throughout the day. Winter cleansers should be hydrating and non-stripping to prevent your skin from drying out. A vitamin C face wash is a great option as it will refresh and cleanse your skin while also combating winter dullness. Vitamin C helps to brighten the skin and improve its texture. Alternatively, a mild Micellar Cleansing Water is perfect for sensitive skin, as it gently removes makeup and impurities without causing irritation or drying out the skin. Cleansing should always be the first step in your skincare routine to ensure the rest of your products work effectively.</p>

<br/><p><strong>3. Vitamin C Serum:</strong></p>
<p>If you haven’t added a serum to your winter skincare routine yet, you’re missing out on some powerful skin benefits. Vitamin C serums are packed with antioxidants, which help to brighten the skin, reduce dark spots, and protect against the damaging effects of free radicals and pollution. These serums are especially beneficial during the winter, as they target common skin concerns like dullness, pigmentation, and dryness. Vitamin C serums also promote collagen production, helping to combat wrinkles and fine lines. Consider adding a vitamin C night serum to your routine to continue nourishing and brightening your skin overnight. This will help you wake up with a smooth and glowing complexion.</p>

<br/><p><strong>4. Sunscreen:</strong></p>
<p>Even in winter, protecting your skin from harmful UV rays is crucial. While the sun’s rays might seem less intense, UV rays can still penetrate through clouds and cause long-term skin damage, including premature aging and skin cancer. So, don’t skip sunscreen during the colder months. Look for sunscreens with added antioxidants, such as vitamin C, which will nourish your skin while providing essential sun protection. If you find sunscreens too heavy or oily, try a sunscreen serum that absorbs quickly into the skin without leaving a greasy residue. If you wear makeup regularly, consider a sunscreen mist to reapply every few hours for continuous protection without disturbing your makeup.</p>

<br/><p><strong>5. Sheet Masks:</strong></p>
<p>Sheet masks are an easy way to give your skin an instant boost of hydration. These masks are packed with ingredients that help to lock in moisture and allow the active ingredients to penetrate deep into the skin. For winter, look for sheet masks that contain nourishing ingredients like hyaluronic acid, vitamin C, or green tea to hydrate and refresh your skin. These masks work wonders in treating winter dryness and can help to brighten dull skin. We recommend using a sheet mask at least 2-3 times a week to combat the lack of moisture in the air and restore a healthy, glowing complexion. They’re perfect for a quick skincare pick-me-up during the colder months!</p>

<br/><p><strong>6. Lip Balm:</strong></p>
<p>Dry, chapped lips are a common issue during winter, and no one wants to deal with cracked or sore lips. Cold air and harsh winds can strip the moisture from your lips, leaving them dry and peeling. That’s why lip balm is a must-have in your winter skincare routine. Carry a hydrating lip balm in your bag or pocket to ensure your lips stay soft and smooth throughout the day. Look for a lip balm that contains nourishing ingredients like shea butter, beeswax, or coconut oil, which provide long-lasting moisture and protection from the elements.</p>

<p>Explore a wide range of <strong>Garnier skincare products</strong> and pamper your skin with the love it needs this cold season. By following the above-mentioned winter skincare routine and incorporating these essential products, you can keep your skin healthy, hydrated, and glowing—no matter the weather!</p>

<br/><p><strong>Have any favorite winter skincare products of your own? Feel free to share them in the comments below!</strong></p>

      `,
    },
    {
      title: " Common Skincare Mistakes You Should Avoid",
      date: "November 22, 2023",
      description: "Learn about the most common skincare mistakes and how to avoid them to keep your skin healthy and glowing.",
      slug: "skincare-mistakes-to-avoid",
      image: "/avo.jpeg",
      content: `
       <p><strong>Here Are 5 Common Skincare Mistakes to Avoid:</strong></p>

<p>Skincare is essential to maintain a healthy, glowing complexion. However, many people unknowingly make mistakes that can damage their skin. Here are five common skincare mistakes you should avoid to achieve the best results:</p>

<ul>
    <li><strong>Skipping Sunscreen:</strong> One of the most common skincare mistakes is neglecting sunscreen. Sun exposure is one of the leading causes of premature aging, pigmentation, wrinkles, and even skin cancer. UV rays can damage the skin even on cloudy days or when you are indoors near windows, and prolonged exposure can result in irreversible damage over time.
        <p><strong>Solution:</strong> Always apply sunscreen with at least SPF 30 or higher daily, regardless of whether you are indoors or outdoors. Make sure to apply it generously and evenly across your face, neck, and any exposed areas. Reapply sunscreen every 2–3 hours, especially if you’re outdoors or sweating. Sun protection is essential in every season, rain or shine, to preserve youthful, healthy skin.</p>
    </li>
    
    <li><strong>Over-Washing Your Face:</strong> Many people mistakenly believe that washing their face multiple times a day will help keep it clean, but over-washing can have the opposite effect. Excessive washing strips your skin of its natural oils, leading to dryness and irritation. On the other hand, under-washing allows dirt, oils, and bacteria to accumulate, leading to acne and dullness. 
        <p><strong>Solution:</strong> Use a gentle, hydrating cleanser that is formulated to maintain your skin’s natural pH balance. Cleanse your face twice a day—once in the morning and once at night—to remove impurities without stripping your skin of essential moisture. If you have oily skin, opt for a foaming or gel-based cleanser. If you have dry or sensitive skin, go for a cream-based, hydrating cleanser.</p>
    </li>

    <li><strong>Not Drinking Enough Water:</strong> Hydration is essential not just for your body but also for your skin. Dehydrated skin appears dull, feels rough, and can accentuate the appearance of fine lines and wrinkles. It's important to nourish your skin from the inside out.
        <p><strong>Solution:</strong> Drink at least 8–10 glasses of water daily to keep your skin hydrated and glowing. Consuming water helps flush toxins from your body and ensures that your skin stays plump and youthful. Consider incorporating water-rich foods like cucumbers, watermelon, and oranges into your diet to help with hydration.</p>
    </li>

    <li><strong>Skipping Moisturizer:</strong> Moisturizing your skin is essential to maintain its balance. Many people skip moisturizer thinking it might make their skin oily, but this can actually worsen dry skin and lead to irritation. Proper moisturizing helps lock in hydration, keeping your skin soft and smooth.
        <p><strong>Solution:</strong> Use a lightweight, oil-free moisturizer if you have oily skin, and a richer cream if your skin is dry. Even if you have combination or sensitive skin, find a moisturizer suitable for your skin type. Moisturizing regularly ensures that your skin's barrier remains intact, preventing moisture loss and keeping your skin healthy.</p>
    </li>

    <li><strong>Using Harsh Products:</strong> Not all skincare products are created equal. For example, heavy, cream-based moisturizers can clog pores and increase oiliness in those with oily or acne-prone skin, while gel-based products can make already dry skin feel tight and uncomfortable. Using harsh exfoliants or products with too many active ingredients can also cause skin irritation.
        <p><strong>Solution:</strong> Understand your skin type (oily, dry, combination, or sensitive) and choose products that cater to your specific needs. If you have sensitive skin, opt for fragrance-free products with gentle formulas. Avoid products with excessive alcohol, sulfates, or artificial fragrances, which can irritate the skin.</p>
    </li>
</ul>

<p><strong>By avoiding these common skincare mistakes, you can help keep your skin healthy, hydrated, and glowing. Consistency is key to seeing long-lasting results, so stick to a skincare routine that works for your skin type and needs. Remember, results take time, so be patient and persistent. Don’t expect miracles overnight, as the best skincare routines are about gradual improvement over time. Moreover, consistency is just as important as the products you use. Stick with your skincare routine daily for optimal results, and listen to your skin's needs as they may change seasonally or with age.</strong></p>

<p><strong>Skincare is not a one-size-fits-all solution. What works for one person may not work for you, so don’t be afraid to experiment with different products and routines to find what works best for your skin. If you’re unsure about what products are right for you, consider consulting with a dermatologist to create a personalized skincare plan tailored to your unique skin needs. Keep track of your progress, stay informed, and don’t be afraid to make adjustments to your routine as necessary.</strong></p>

<p><strong>Have any questions or other skincare tips to share? Feel free to leave a comment below!</strong></p>

      `,
    },
    {
      title: "The Best Diet for Healthy Skin",
      date: "October 8, 2023",
      description: "Nutrition plays a key role in your skin health. Find out what foods are best for achieving radiant, healthy skin.",
      slug: "best-diet-for-healthy-skin",
      image: "/bestt.jpeg",
      content: `
        <p><strong>Eat Your Way to Better Skin with These Healthy Foods: A Perfect Skin Diet</strong></p>

<p>Your skin is a reflection of your overall health, and one of the best ways to nourish it is through the food you eat. Certain foods provide essential nutrients that can help keep your skin healthy, hydrated, and glowing. Incorporating these skin-friendly foods into your diet can make a big difference in achieving radiant skin.</p>

<p><strong>1. Omega-3 Fatty Acids</strong></p>
<ul>
    <li><strong>What they are:</strong> Omega-3 fatty acids are essential fats that play a key role in maintaining healthy skin by helping to keep it hydrated and reducing inflammation.</li>
    <li><strong>Where to find them:</strong> You can find omega-3s in fatty fish like salmon, mackerel, sardines, and anchovies. Other sources include chia seeds, flaxseeds, and walnuts.</li>
    <li><strong>How they help:</strong> Omega-3s help strengthen the skin's barrier, keeping moisture locked in and preventing dryness. They also help reduce inflammation, which can calm skin conditions such as acne, eczema, and psoriasis.</li>
    <li><strong>Why they’re important:</strong> Omega-3s contribute to the production of healthy skin cells and can help protect your skin from damage caused by UV rays and pollutants.</li>
</ul>

<p><strong>2. Vitamin C</strong></p>
<ul>
    <li><strong>What it is:</strong> Vitamin C is a potent antioxidant that plays a critical role in the production of collagen, a protein that gives your skin structure and elasticity.</li>
    <li><strong>Where to find it:</strong> You can boost your vitamin C intake by eating citrus fruits like oranges, lemons, and grapefruits, as well as strawberries, bell peppers, broccoli, and kale.</li>
    <li><strong>How it helps:</strong> Vitamin C helps in collagen synthesis, which is essential for maintaining skin firmness and preventing wrinkles. It also acts as a powerful antioxidant, neutralizing harmful free radicals that can damage skin cells and accelerate aging.</li>
    <li><strong>Why it’s important:</strong> Regular intake of vitamin C helps protect your skin from sun damage, reducing the appearance of dark spots, sunburn, and hyperpigmentation. It also aids in the repair of damaged skin, improving skin texture and tone.</li>
</ul>

<p><strong>3. Antioxidants</strong></p>
<ul>
    <li><strong>What they are:</strong> Antioxidants are compounds that protect your skin from oxidative damage caused by free radicals. These free radicals can accelerate the aging process and cause skin damage when exposed to environmental stressors like pollution, UV rays, and toxins.</li>
    <li><strong>Where to find them:</strong> Foods rich in antioxidants include leafy greens such as spinach, kale, and swiss chard, nuts like almonds and walnuts, and berries like blueberries, raspberries, and blackberries. Sunflower seeds are another great source.</li>
    <li><strong>How they help:</strong> Antioxidants neutralize free radicals, reducing oxidative stress on your skin. This helps prevent premature aging, wrinkles, and fine lines, and improves overall skin health. For example, vitamin E, an antioxidant found in nuts and seeds, helps moisturize the skin and protect it from UV damage.</li>
    <li><strong>Why they’re important:</strong> Antioxidants keep your skin looking youthful and healthy by defending it against the damage caused by free radicals, which can lead to the breakdown of collagen and elastin, important proteins that maintain skin’s firmness and elasticity.</li>
</ul>

<p><strong>4. Water</strong></p>
<ul>
    <li><strong>What it is:</strong> Water is essential for overall health, and staying hydrated is one of the easiest ways to maintain smooth, glowing skin.</li>
    <li><strong>How it helps:</strong> Proper hydration helps to flush out toxins from the body, which can otherwise lead to skin issues such as breakouts. Water also helps to keep your skin plump and supple, reducing the appearance of fine lines and wrinkles.</li>
    <li><strong>Why it’s important:</strong> Dehydration can lead to dry, flaky skin, which accentuates wrinkles and other skin imperfections. When you drink enough water, it helps maintain your skin’s elasticity and radiance. Aim to drink at least eight 8-ounce glasses of water a day to stay properly hydrated and support healthy skin.</li>
</ul>

<p><strong>Bonus Tips for Glowing Skin:</strong></p>
<ul>
    <li><strong>Healthy Fats:</strong> Apart from Omega-3 fatty acids, incorporate healthy fats such as avocado, olive oil, and nuts into your diet. These fats help maintain a healthy skin barrier and keep it moisturized.</li>
    <li><strong>Protein:</strong> Collagen and elastin fibers in the skin are made from proteins, so it's crucial to include protein-rich foods like lean meats, beans, and legumes in your diet for skin repair and regeneration.</li>
    <li><strong>Zinc:</strong> Zinc is important for skin healing and can be found in foods such as pumpkin seeds, beans, nuts, and whole grains. It also helps reduce acne outbreaks and maintains skin health.</li>
</ul>

<p><strong>Conclusion:</strong></p>
<p>Incorporating these nutrient-rich foods into your diet can help promote healthy, radiant skin from the inside out. Consuming a variety of omega-3 fatty acids, vitamin C, antioxidants, and staying well-hydrated will protect your skin from damage, reduce inflammation, and keep it moisturized and glowing. Healthy skin starts with the right nutrition, so start eating your way to a more youthful and vibrant complexion today!</p>

<p><strong>Have any questions or tips for achieving glowing skin? Feel free to share your thoughts in the comments below!</strong></p>

      `,
    },
    {
      title: "Best Skincare Tips for Oily Skin",
      date: "September 5, 2023",
      description: "How to manage oily skin with the right products and skincare routine to avoid breakouts.",
      slug: "skincare-tips-oily-skin",
      image: "/oly.jpeg",
      content: `
        <p>Managing oily skin can be challenging, but with the right practices, you can keep oil under control and maintain a clear, healthy complexion. Oily skin is prone to excess sebum production, which can lead to clogged pores and breakouts if not properly managed. Below are some essential tips that will help you manage oily skin while preventing unwanted issues like acne and shine.</p> 
        <ul> <br/><li><strong>Use a Gel-Based Cleanser:</strong> <p>Choosing the right cleanser is crucial for oily skin. Harsh cleansers may strip away too much oil, which can cause the skin to overcompensate by producing even more oil. A gel-based cleanser is perfect for oily skin as it helps to remove excess oil without drying out the skin. Gel cleansers are generally lightweight, non-comedogenic (won’t clog pores), and gentle on the skin while still effectively cleansing and balancing oil production.</p>
         <p><strong>How to Use:</strong> Look for a gel-based cleanser that is specifically formulated for oily or acne-prone skin. Make sure it’s free of harsh chemicals and sulfates that could irritate the skin. Use it twice a day—once in the morning and once before bed—to remove excess oil, dirt, and impurities.</p> 
         <p><strong>Personal Tip:</strong> Avoid cleansers with high alcohol content, as they can cause your skin to dry out and stimulate more oil production. Look for ingredients like salicylic acid or tea tree oil for extra oil-fighting benefits.</p> </li> <br/><li><strong>Exfoliate Regularly:</strong> <p>Exfoliation is essential for removing dead skin cells that can clog pores and cause breakouts. It also helps to control excess oil, leaving your skin feeling smoother and more balanced.
          However, it’s important to avoid over-exfoliating as it can irritate the skin and lead to more oil production. Aim to exfoliate 1-3 times a week depending on your skin’s needs.</p> <p><strong>How to Exfoliate:</strong> Choose a gentle exfoliator with ingredients like salicylic acid, which is effective for oily and acne-prone skin. You can either use a physical exfoliant (scrubs) or a chemical exfoliant (exfoliating acids like AHAs or BHAs) to help remove dead skin and unclog pores. Gently apply the exfoliator, avoid scrubbing too harshly,
           and rinse thoroughly with lukewarm water.</p> <p><strong>Personal Tip:</strong> 
          Over-exfoliation can cause skin irritation and increase oil production. Stick to a regular schedule and always follow up with a moisturizer to maintain hydration.</p> </li> <li><strong>Moisturize:</strong> <p>Even though your skin is oily, it still needs moisture to stay balanced. When you skip moisturizing, your skin may become dry and overproduce oil in an attempt to compensate. The key is to choose the right moisturizer—one that’s lightweight, oil-free, and won’t clog pores. Hydrated skin is healthier and less likely to break out, as it’s in a better state to regulate oil production.</p> <p><strong>How to Moisturize:</strong> Look for a lightweight, non-comedogenic, oil-free moisturizer. 
          Gel-based moisturizers or water-based formulas are often the best choice for oily skin. Apply a thin layer to your face after cleansing and exfoliating, even if your skin feels oily. This will help maintain hydration and prevent your skin from producing excess sebum.</p> <p><strong>Personal Tip:</strong> Moisturizing at night is just as important as during the day. Use a non-greasy moisturizer that supports your skin’s natural repair process while you sleep.</p> </li> <li><strong>Blotting Papers:</strong> <p>Blotting papers are a quick and convenient solution to manage oily skin throughout the day. These small, portable sheets can absorb excess oil, leaving your skin looking matte and fresh without disrupting your makeup or skincare. 
          Carry them with you to tackle any shine that appears, especially in areas like the forehead, nose, and chin (the T-zone), which are more prone to oil production.</p> <p><strong>How to Use:</strong> Gently press the blotting paper on areas of your face where excess oil has built up. You don’t need to rub or scrub—just lightly dab it onto the skin to absorb oil. Use blotting papers throughout the day as needed to maintain a fresh, shine-free complexion without drying out your skin.</p> <p><strong>Personal Tip:</strong> Blotting papers are not a substitute for proper skincare; they’re meant for quick fixes when you’re on the go. Be sure to maintain a consistent skincare routine at home.</p> </li> </ul> <p>By following these steps—using a gel-based cleanser, exfoliating regularly, moisturizing, and carrying blotting papers—you can better manage oily skin,
           control excess shine, and prevent breakouts. The key is to balance oil production while ensuring your skin remains hydrated and healthy. Keep experimenting with products that suit your skin's needs, and remember that consistency is key to achieving the best results.</p> <p><strong>Feel free to share your own tips for managing oily skin in the comments below! How do you keep your skin balanced and healthy?</strong></p>
      `,
    },
    {
      title: "The Ultimate Guide to Anti-Aging Skincare",
      date: "August 20, 2023",
      description: "Explore the best anti-aging skincare practices and the products that can help prevent premature aging.",
      slug: "ultimate-guide-anti-aging",
      image: "/aging.jpg",
      content: `
       <p>Anti-aging skincare is essential for maintaining youthful, radiant skin. The key to keeping your skin smooth, firm, and youthful lies in your skincare practices and the ingredients you use. To fight the visible signs of aging, there are several core habits that can work wonders over time. Here are some must-know anti-aging skincare practices to add to your routine:</p> <ul> <li><strong>Use Retinol:</strong> <p>Retinol, a derivative of Vitamin A, is widely known as one of the most effective anti-aging ingredients. It accelerates cell turnover, meaning it speeds up the process in which your skin sheds old skin cells and replaces them with fresh ones. This process helps to diminish fine lines, wrinkles, and uneven skin tone by promoting smoother, healthier skin. Moreover, retinol boosts collagen production, which is essential for maintaining skin's firmness and elasticity.</p> <p><strong>Personal Tip:</strong> If you’re new to retinol, start with a low concentration (around 0.25% to 0.5%) to allow your skin to adjust. Retinol can be a bit drying or cause irritation when first used, so it's important to apply a gentle moisturizer afterward.
        Use retinol at night, as it can increase your skin’s sensitivity to sunlight. Also, always follow up with sunscreen during the day to protect your skin from UV damage.</p> <p><strong>Important Note:</strong> Be consistent with your retinol use, but introduce it gradually into your routine to avoid irritation. Over time, you’ll see a noticeable improvement in skin texture and a reduction in fine lines and wrinkles.</p> </li> <li><strong>Hydrate Your Skin:</strong> <p>Keeping your skin hydrated is a fundamental anti-aging strategy. As we age, the skin’s ability to retain moisture diminishes, leading to dryness, dullness, and the visible appearance of fine lines. Moisturizing your skin regularly ensures it stays plump, smooth, and supple. Dehydrated skin can make wrinkles and other aging signs appear more pronounced, so using a rich moisturizer that helps lock in moisture is crucial for maintaining a youthful glow.</p> <p><strong>Personal Tip:</strong> Opt for moisturizers containing hyaluronic acid, glycerin, or ceramides. Hyaluronic acid is an especially powerful ingredient because it can hold up to 1000 times its weight in water, giving your skin a plump, hydrated appearance. Apply your moisturizer to damp skin to seal in moisture, and make sure to hydrate both morning and night for consistent skin nourishment.
        </p> <p><strong>Additional Tip:</strong> Don't forget about your lips and neck. These areas can show signs of aging too, and keeping them moisturized will enhance your overall skincare routine.</p> </li> <li><strong>SPF is a Must:</strong> <p>Using sunscreen is the most important step in any anti-aging skincare regimen. UV rays from the sun are the leading cause of premature skin aging, 
        contributing to wrinkles, age spots, and loss of elasticity. While it may be tempting to skip sunscreen on cloudy or cooler days, UV rays can still penetrate the skin and cause damage, so it’s essential to wear sunscreen daily, year-round, rain or shine.</p> <p><strong>How Sunscreen Works:</strong> Sunscreen acts as a barrier to protect your skin from harmful UV radiation. It prevents both UVA rays, which cause skin aging and wrinkles, and UVB rays, which are responsible for sunburns and pigmentation. Without proper sun protection, your skin will age faster, developing visible lines, discoloration, and sagging.</p> <p><strong>Personal Tip:</strong> Choose a broad-spectrum sunscreen with an SPF of 30 or higher and apply it generously to your
         face and neck. Reapply sunscreen every two hours if you’re outdoors or after swimming or sweating. A tinted sunscreen is also a great option to protect your skin from visible light that can contribute to pigmentation.</p> </li> <li><strong>Vitamin C:</strong> <p>Vitamin C is a powerful antioxidant that helps protect your skin from free radical damage caused by sun exposure, pollution, and other environmental stressors. These free radicals contribute to the breakdown of collagen and elastin in the skin, leading to wrinkles and sagging. Vitamin C helps neutralize these free radicals and supports collagen production, which is key for maintaining the skin's elasticity and youthful appearance.</p> <p><strong>How Vitamin C Helps:</strong> Aside from its anti-aging benefits, Vitamin C also brightens the skin and reduces the appearance of dark spots, hyperpigmentation, and discoloration. This gives you a clearer, more even-toned complexion.</p> <p><strong>Personal Tip:</strong> To maximize Vitamin C’s benefits, apply a serum or moisturizer containing a stable form of Vitamin C in the morning after cleansing, and before applying sunscreen. This way, you can enjoy its protective antioxidant benefits throughout the day. Make sure to store your Vitamin C products in a cool, dark place, as they can degrade when exposed to air and sunlight.</p> <p><strong>Important Tip:</strong> Start with a Vitamin C serum that contains 10-20% concentration to avoid irritation, and gradually work your way up to stronger formulations.</p> </li> </ul> <p>By incorporating these anti-aging skincare tips into your daily routine, you can prevent premature skin aging and help your skin remain youthful, firm, and radiant. These practices—retinol, hydration, sunscreen, and Vitamin C—work in synergy to target various signs of aging, leaving your skin looking smooth, rejuvenated, and healthy.</p> <p><strong>Share your anti-aging skincare tips and favorite products in the comments below! What skincare practice has helped you the most in maintaining youthful skin?</strong></p>
      `,
    }
  ];

  const postsPerPage = 3; // Define how many posts to show per page
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate the total number of pages

  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the index range of posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle pagination button clicks
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle page number clicks
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300 py-16">
      {/* Blog Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-pink-500">
          Latest Blog Posts
        </h2>
        <p className="text-lg text-pink-500 mt-4">
          Stay updated with the latest trends and tips on skincare, wellness, and beauty.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            {/* Blog Post Image */}
            <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} layout="responsive" width={500} height={300} objectFit="cover" />
            </div>

            {/* Blog Post Title */}
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-pink-600 hover:text-emerald-700">
              {post.title}
            </Link>

            {/* Blog Post Date */}
            <div className="flex items-center text-pink-500 mt-2">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
            </div>

            {/* Blog Post Description */}
            <p className="text-pink-400 mt-4">{post.description}</p>

            {/* Read More Button */}
            <div className="flex justify-between items-center mt-6">
              <Link href={`/blog/${post.slug}`} className="text-pink-800 hover:text-emerald-900 font-semibold">
                Read More
              </Link>
              <div className="flex items-center">
                <FaRegCommentDots className="mr-2 text-pink-600" />
                <span className="text-pink-600">5</span> {/* Example comment count */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center mt-12">
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-pink-300 rounded-md text-pink-700 hover:bg-emerald-400"
            disabled={currentPage === 1}>
            Previous
          </button>

          {/* Render page numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-md text-pink-700 hover:bg-emerald-400 ${currentPage === index + 1 ? 'bg-emerald-400' : 'bg-pink-300'}`}>
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-pink-300 rounded-md text-pink-700 hover:bg-emerald-400"
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
