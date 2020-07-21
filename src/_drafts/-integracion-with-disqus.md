
## Creating a forum
1. Go to [Disqus admin](https://disqus.com/admin/create/), you may need to login. In the form, 
    - enter your **Website name**, and the appropriate **category**
2. Once a forum was created, it will take you to three steps:
3. First step is to"Select a plan", go to the bottom of the page and select "Basic"
4. Second step is the "What platform is your site on?", go to the bottom and click on the button that says "I don't see my platform listed, install manually with Universal Code"
5. Copy the code block
```
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://empoderemosmas.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```