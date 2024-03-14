# [IndexNow](https://www.indexnow.org/)

> IndexNow is an easy way for websites owners to instantly inform search engines about latest content changes on their website. In its simplest form, IndexNow is a simple ping so that search engines know that a URL and its content has been added, updated, or deleted, allowing search engines to quickly reflect this change in their search results.

IndexNow requires verification before crawling websites. This is done by comparing a key with a document on the website.

To avoid duplication, [scala-libraries](https://github.com/nokdotie/scala-libraries) stores the key, the [API](https://github.com/nokdotie/api) validates it, and the website delegates.

For the above process to work, the website must be able to route the verification requests correctly. This is where the key and the route must follow a common pattern: `/indexnow-[a-zA-Z0-9]+.txt`.
