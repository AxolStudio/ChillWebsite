const FEED_URL = "https://audioboom.com/channels/5031584.rss";

window.addEventListener("DOMContentLoaded", (event) => {

    $("#recent-episodes").rss(FEED_URL, {
        limit: 5,
        support: false,
        layoutTemplate: "{entries}",
        entryTemplate: '<a href="{url}" target="_blank" rel="external" class="min-w-full"><div class="min-h-full border border-neutral-200 dark:border-neutral-700 border-2 rounded overflow-hidden shadow-2xl relative backdrop-blur"><meta property="og:image" content="{teaserImageUrl}" /><div class="w-full thumbnail_card nozoom" style="background-image:url({teaserImageUrl});"></div><div class="px-6 py-4"><div><div class="font-bold text-xl text-neutral-800 decoration-primary-500 hover:underline hover:underline-offset-2 dark:text-neutral">{title}<span class="text-xs align-top cursor-default text-neutral-400 dark:text-neutral-500"><span class="rtl:hidden">&#8599;</span><span class="ltr:hidden">&#8598;</span></span></span></div></div><div class="text-sm text-neutral-500 dark:text-neutral-400"></div><div class="py-1 prose dark:prose-invert">{shortBodyPlain}</div></div><div class="px-6 pt-4 pb-2"></div></div></a>',
    });


});