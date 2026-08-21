<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Typography" name="Typography" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Heading With Tages</h4>
              <p class="pt-1.1 leading-normal">Use tags <code class="py-1.1 px-2.5 text-danger">h1 to h6</code> for get desire heading.</p>
            </div>
            <div class="sm:p-5 p-4">
              <h1 class="mb-2">h1. Tailwind heading</h1>
              <h2 class="mb-2">h2. Tailwind heading</h2>
              <h3 class="mb-2">h3. Tailwind heading</h3>
              <h4 class="mb-2">h4. Tailwind heading</h4>
              <h5 class="mb-2">h5. Tailwind heading</h5>
              <h6 class="mb-2">h6. Tailwind heading</h6>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Heading With Classes</h4>
              <p class="pt-1.1 leading-normal">Use classes <code class="py-1.1 px-2.5 text-danger">.h1 to .h6</code> for get desire heading.</p>
            </div>
            <div class="sm:p-5 p-4">
              <h1 class="mb-2">h1. Tailwind heading</h1>
              <h2 class="mb-2">h2. Tailwind heading</h2>
              <h3 class="mb-2">h3. Tailwind heading</h3>
              <h4 class="mb-2">h4. Tailwind heading</h4>
              <h5 class="mb-2">h5. Tailwind heading</h5>
              <h6 class="mb-2">h6. Tailwind heading</h6>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Display Heading</h4>
              <p class="pt-1.1 leading-normal">Use classes <code class="py-1.1 px-2.5 text-danger">display-1 to display-6</code> for get desire heading.</p>
            </div>
            <div class="sm:p-5 p-4">
              <h1 class="mb-2 !font-light leading-tight xl:text-7.5xl">Display 1</h1>
              <h1 class="mb-2 !font-light leading-tight xl:text-[72px]">Display 2</h1>
              <h1 class="mb-2 !font-light leading-tight xl:text-[64px]">Display 3</h1>
              <h1 class="mb-2 !font-light leading-tight xl:text-[56px]">Display 4</h1>
              <h1 class="mb-2 !font-light leading-tight xl:text-[48px]">Display 5</h1>
              <h1 class="mb-2 !font-light leading-tight xl:text-4.5xl">Display 6</h1>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Inline Text Elements</h4>
              <p class="pt-1.1 leading-normal">Use Tags <code class="py-1.1 px-2.5 text-danger">del, s, inc etc.</code> for get desire heading.</p>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4">You can use the mark tag to <mark>highlight</mark> text.</p>
              <p class="mb-4"><del>This line of text is meant to be treated as deleted text.</del></p>
              <p class="mb-4"><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p class="mb-4"><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
              <p class="mb-4"><u>This line of text will render as underlined.</u></p>
              <p class="mb-4"><small>This line of text is meant to be treated as fine print.</small></p>
              <p class="mb-4"><strong>This line rendered as bold text.</strong></p>
              <p class="mb-4"><em>This line rendered as italicized text.</em></p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Customizing Headings</h4>
            </div>
            <div class="sm:p-5 p-4">
              <h3 class="mb-2">
                Fancy display heading
                <small class="!text-body text-[0.875em]">With faded secondary text</small>
              </h3>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Lead</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="text-[17.5px] font-light mb-4">This is a lead paragraph. It stands out from regular paragraphs.</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Alignment text</h4>
              <p class="pt-1.1 leading-normal">Use classes <code class="py-1.1 px-2.5 text-danger">text-start, text-center, text-end</code> for get desire heading.</p>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm text-start">Left aligned text on all viewport sizes.</p>
              <p class="mb-4 sm:text-sm text-center">Center aligned text on all viewport sizes.</p>
              <p class="mb-4 sm:text-sm text-end">Right aligned text on all viewport sizes.</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Font weight and italics</h4>
              <p class="pt-1.1 leading-normal">Use tags <code class="py-1.1 px-2.5 text-danger">, font-normal, font-italic</code> for get desire text.</p>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm sm:text-start">Left aligned text on viewports sized SM (small) or wider.</p>
              <p class="mb-4 sm:text-sm md:text-start">Left aligned text on viewports sized MD (medium) or wider.</p>
              <p class="mb-4 sm:text-sm lg:text-start">Left aligned text on viewports sized LG (large) or wider.</p>
              <p class="mb-4 sm:text-sm xl:text-start">Left aligned text on viewports sized XL (extra-large) or wider.</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Text Colors</h4>
              <p class="pt-1.1 leading-normal">Use tags <code class="py-1.1 px-2.5 text-danger">, font-normal, font-italic</code> for get desire text.</p>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm text-muted">This is an example of muted text. Add class<code class="py-1.1 px-2.5 text-danger">text-muted</code></p>
              <p class="mb-4 sm:text-sm text-primary">This is an example of primary text. Add class<code class="py-1.1 px-2.5 text-danger">text-primary</code></p>
              <p class="mb-4 sm:text-sm text-success">This is an example of success text. Add class<code class="py-1.1 px-2.5 text-danger">text-success</code></p>
              <p class="mb-4 sm:text-sm text-info">This is an example of info text. Add class<code class="py-1.1 px-2.5 text-danger">text-info</code></p>
              <p class="mb-4 sm:text-sm text-warning">This is an example of warning text. Add class<code class="py-1.1 px-2.5 text-danger">text-warning</code></p>
              <p class="mb-4 sm:text-sm text-danger">This is an example of danger text. Add class<code class="py-1.1 px-2.5 text-danger">text-danger</code></p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Font Sizes</h4>
              <p class="pt-1.1 leading-normal">Use Classes <code class="py-1.1 px-2.5 text-danger">.fs-1 to .fs-6</code> for get desire text.</p>
            </div>
            <div class="sm:p-5 p-4">
              <p class="xl:text-[36px] mb-2">.fs-1 text</p>
              <p class="xl:text-3xl mb-2">.fs-2 text</p>
              <p class="xl:text-2xl mb-2">.fs-3 text</p>
              <p class="xl:text-lg mb-2">.fs-4 text</p>
              <p class="xl:text-base mb-2">.fs-5 text</p>
              <p class="xl:text-2sm">.fs-6 text</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Blockquotes</h4>
            </div>
            <div class="sm:p-5 p-4">
              <blockquote class="mb-4 text-[1.09375rem]">
                <p class="text-inherited">A well-known quote, contained in a blockquote element.</p>
              </blockquote>

              <h5 class="mb-2">Blockquote With <code class="py-1.1 px-2.5 text-danger">figcaption</code></h5>
              <figure class="mb-4">
                <blockquote class="mb-4 text-[1.09375rem]">
                  <p class="text-inherited">A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="mb-4 -mt-4 before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Blockquotes Alighment</h4>
            </div>
            <div class="sm:p-5 p-4">
              <h5 class="mb-2">Blockquote With Center Alighment</h5>
              <figure class="mb-4 text-center">
                <blockquote class="mb-4 text-[1.09375rem]">
                  <p class="text-inherited">A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="mb-4 -mt-4 before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
              </figure>

              <h5 class="mb-2">Blockquote With Right Alighment</h5>
              <figure class="mb-4 text-end">
                <blockquote class="mb-4 text-[1.09375rem]">
                  <p class="text-inherited">A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="mb-4 -mt-4 before:content-['\2014\00A0']">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Unstyled Lists</h4>
            </div>
            <div class="sm:p-5 p-4">
              <ul class="list-unstyled">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it's still a list.</li>
                <li>However, this style only applies to immediate child elements.</li>
                <li>
                  Nested lists:
                  <ul>
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Description List</h4>
            </div>
            <div class="sm:p-5 p-4">
              <dl class="row">
                <dt class="sm:w-1/4 font-bold">Description lists</dt>
                <dd class="sm:w-3/4 mb-2">A description list is perfect for defining terms.</dd>

                <dt class="sm:w-1/4 font-bold">Term</dt>
                <dd class="sm:w-3/4 mb-2">
                  <p class="mb-4">Definition for the term.</p>
                  <p class="mb-4">And some more placeholder definition text.</p>
                </dd>

                <dt class="sm:w-1/4 font-bold">Another term</dt>
                <dd class="sm:w-3/4 mb-2">This definition is short, so no extra paragraphs or anything.</dd>

                <dt class="sm:w-1/4 font-bold text-truncate">Truncated term is truncated</dt>
                <dd class="sm:w-3/4 mb-2">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                <dt class="sm:w-1/4 font-bold">Nesting</dt>
                <dd class="sm:w-3/4 mb-2">
                  <dl class="row">
                    <dt class="sm:w-1/3 font-bold">Nested definition list</dt>
                    <dd class="sm:w-2/3 mb-2">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Inline List</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm font-bold">Bold text.</p>
              <p class="mb-4 sm:text-sm font-normal">Normal weight text.</p>
              <p class="mb-4 sm:text-sm italic">Italic text.</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Abbreviations</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm"><abbr title="attribute">attr</abbr></p>
              <p class="mb-4 sm:text-sm"><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Ol Listing</h4>
            </div>
            <div class="sm:p-5 p-4">
              <ol class="list-auto pl-8 mb-4">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Ul Listing</h4>
            </div>
            <div class="sm:p-5 p-4">
              <ul class="list-auto ml-4">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Inline List</h4>
            </div>
            <div class="sm:p-5 p-4">
              <ul class="list-inline">
                <li class="inline mr-2">This is a list item.</li>
                <li class="inline mr-2">And another one.</li>
                <li class="inline">But they're displayed inline.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base">Monospace</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="font-monospace sm:text-sm">This is in monospace</p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base mb-1">Fancy Listing 1</h4>
              <p class="pt-1.1 leading-normal">Use class <code class="py-1.1 px-2.5 text-danger">list-icons</code> to ul for get desire ol list.</p>
            </div>
            <div class="sm:p-5 p-4">
              <ul class="list-icons">
                <li>
                  <span class="align-middle me-2"><i class="ti-angle-right"></i></span> Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span class="align-middle me-2"><i class="ti-angle-right"></i></span> Consectetur adipiscing elit
                </li>
                <li>
                  <span class="align-middle me-2"><i class="ti-angle-right"></i></span> Integer molestie lorem at massa
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5">
              <h4 class="text-base mb-1">Fancy Listing with href</h4>
              <p class="pt-1.1 leading-normal">Use class <code class="py-1.1 px-2.5 text-danger">list-icons</code> to ul for get desire ol list.</p>
            </div>
            <div class="sm:p-5 p-4">
              <ul class="list-icons">
                <li>
                  <a href="javascript:void(0);"
                    ><span class="align-middle me-2"><i class="fa fa-check text-info"></i></span> Lorem ipsum dolor sit amet</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                    ><span class="align-middle me-2"><i class="fa fa-check text-info"></i></span>Consectetur adipiscing elit</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                    ><span class="align-middle me-2"><i class="fa fa-check text-info"></i></span>Integer molestie lorem at massa</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
