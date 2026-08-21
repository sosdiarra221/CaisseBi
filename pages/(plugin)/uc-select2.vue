<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import Multiselect from "vue-multiselect";

const value = ref([]);
const value1 = ref([]);
const value2 = ref([]);
const value3 = ref([]);
const value4 = ref([]);
const value5 = ref([]);
const value6 = ref([]);
const value7 = ref([]);
const value8 = ref([]);
const value9 = ref([]);
const value10 = ref([]);
const value11 = ref([]);
const value12 = ref([]);
const value13 = ref([]);
const value14 = ref([]);
const value15 = ref([]);
const value16 = ref([]);
const value17 = ref([]);
const value18 = ref([]);
const value19 = ref([]);
const value20 = ref([]);
const value21 = ref([]);
const value22 = ref([]);
const value23 = ref([]);
const value24 = ref([]);
const value25 = ref([]);
const value26 = ref([]);
const value27 = ref([]);
const value28 = ref([]);
</script>

<template>
  <div class="content-body">
    <CommonNav title="Profile Detail" name="Profile Detail" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Single select boxes</h4>
                <p class="mb-4">Select2 can take a regular select box like this...</p>
              </div>
              <Multiselect track-by="name" :options="['Alabama', 'Wyoming']" :searchable="true" :close-on-select="true" :show-labels="true" v-model="value" />
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Multi-select boxes</h4>
                <p class="mb-4">
                  Select2 also supports multi-value select boxes. The select below is declared with the multiple
                  <mark class="text-black">attribute</mark>.
                </p>
              </div>
              <Multiselect class="multi-select" :options="['Alabama', 'Wyoming', 'dlf']" :searchable="true" :multiple="true" v-model="value1" />
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Dropdown option groups</h4>
                <p class="mb-4">
                  In HTML,
                  <code class="py-1.1 px-2.5 text-danger">&lt;option&gt;</code>
                  elements can be grouped by wrapping them with in <br />
                  an
                  <code class="py-1.1 px-2.5 text-danger">&lt;optgroup&gt;</code>
                  element:
                </p>
              </div>
              <Multiselect
                v-model="value2"
                :options="[
                  {
                    language: 'Group Name',
                    libs: [{ name: 'Nested option 1' }, { name: 'Nested option 2' }, { name: 'Nested option 3' }],
                  },
                  {
                    language: 'Another Group Name',
                    libs: [{ name: 'Nested option 1' }, { name: 'Nested option 2' }, { name: 'Nested option 3' }],
                  },
                ]"
                group-values="libs"
                group-label="language"
                :group-select="true"
                placeholder="Type to search"
                track-by="name"
                label="name"
              />
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Disabling options</h4>
                <p class="mb-4">
                  Select2 will correctly handle disabled options when
                  <code class="py-1.1 px-2.5 text-danger">disabled</code>
                  attribute is set) and from remote srouces where the object has
                  <code class="py-1.1 px-2.5 text-danger">disabled: true</code>
                  set.
                </p>
              </div>
              <Multiselect
                class="disabling-options"
                track-by="name"
                :options="['First', 'Second (disabled)', 'Third']"
                :searchable="true"
                :close-on-select="true"
                v-model="value3"
              />
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Disabling a Select2 control</h4>
                <p class="mb-4">
                  Select2 will respond to the
                  <code class="py-1.1 px-2.5 text-danger">disabled</code>
                  attribute on
                  <code class="py-1.1 px-2.5 text-danger">&lt;select&gt;</code>
                  elements. You can also initialize Select2 with
                  <code class="py-1.1 px-2.5 text-danger">disabled: true</code>
                  to get the same effect.
                </p>
              </div>

              <div class="mb-4">
                <Multiselect class="js-example-disabled" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="false" v-model="value4" />
              </div>
              <div class="mb-4">
                <Multiselect class="js-example-disabled" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="true" v-model="value5" />
              </div>

              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white me-2" id="js-programmatic-enable">Enable</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" id="js-programmatic-disable">Disable</button>
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Select2 With Labels</h4>
                <p class="mb-4">
                  You can, and should, use a
                  <code class="py-1.1 px-2.5 text-danger">&lt;label&gt;</code>
                  with Select2, just like any other
                  <code class="py-1.1 px-2.5 text-danger">&lt;select&gt;</code>
                  element.
                </p>
              </div>
              <label class="mb-4 select2-label" for="id_label_single">
                Click this to highlight the single select element <br />
                <Multiselect class="select2-with-label-single js-states block" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="false" v-model="value6" />
              </label>
              <label class="select2-label" for="id_label_multiple">
                Click this to highlight the multiple select element <br />
                <Multiselect class="select2-with-label-multiple js-states" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="true" v-model="value7" />
              </label>
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Container Width</h4>
                <p class="mb-4">
                  The two Select2 boxes below are styled to
                  <code class="py-1.1 px-2.5 text-danger">50%</code> and <code class="py-1.1 px-2.5 text-danger">75%</code> width respectively to support responsive design:
                </p>
              </div>
              <div class="mb-4">
                <Multiselect class="select2-width-50" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="false" v-model="value8" />
              </div>
              <div class="mb-4">
                <Multiselect class="select2-width-75" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="true" v-model="value9" />
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Themes</h4>
                <p class="mb-4">
                  Select2 supports custom themes using the
                  <code class="py-1.1 px-2.5 text-danger">theme</code> option so you can style Select2 to match the rest of your application.
                </p>
              </div>

              <div class="mb-4">
                <Multiselect class="select2-width-50" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="false" v-model="value10" />
              </div>
              <div class="mb-4">
                <Multiselect class="select2-width-75" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="true" v-model="value11" />
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Ajax (remote data)</h4>
                <p class="mb-4">Select2 comes with AJAX support built in, using jQuery's AJAX methods. In this example, we can search for repositories using GitHub's API:</p>
              </div>
              <Multiselect class="js-data-example-ajax w-100" :options="''" :searchable="true" :multiple="false" v-model="value12" />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Loading array data</h4>
                <p class="mb-4">
                  You may use the
                  <code class="py-1.1 px-2.5 text-danger">data</code>
                  configuration option to load dropdown options from a local array.
                </p>
              </div>
              <Multiselect
                class="js-example-data-array"
                :options="['enhancement', 'bug', 'duplicate', 'invalid', 'wontfix']"
                :searchable="true"
                :multiple="false"
                v-model="value13"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Automatic Selection</h4>
                <p class="mb-4">
                  Select2 can be configured to automatically select the currently highlighted result when the dropdown is btn-closed by using the
                  <code class="py-1.1 px-2.5 text-danger">selectOnbtn-close</code>
                  option:
                </p>
              </div>
              <Multiselect class="automatic-selection" :options="['Alabama', 'Wyoming']" :searchable="true" :multiple="false" v-model="value13" />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Remain open after selection</h4>
                <p class="mb-4">
                  Select2 will automatically btn-close the dropdown when an element is selected, similar to what is done with a normal select box. You may use the
                  <code class="py-1.1 px-2.5 text-danger">btn-closeOnSelect</code>
                  option to prevent the dropdown from closing when a result is selected:
                </p>
              </div>
              <Multiselect class="automatic-selection" :options="['Alabama', 'Wyoming']" :searchable="true" :close-on-select="false" :show-labels="false" v-model="value14" />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Dropdown placement</h4>
                <p class="mb-4">
                  The
                  <code class="py-1.1 px-2.5 text-danger">dropdownParent</code>
                  option allows you to pick an alternative element for the dropdown to be appended to:
                </p>
              </div>

              <Multiselect class="automatic-selection" :options="['Alabama', 'Wyoming']" :searchable="true" :close-on-select="true" :show-labels="false" v-model="value15" />

              <div id="select2-modal"></div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Limiting the number of selections</h4>
                <p class="mb-4">
                  Select2 multi-value select boxes can set restrictions regarding the maximum number of options that can be selected. The select below is declared with the
                  <code class="py-1.1 px-2.5 text-danger">multiple</code>
                  attribute with
                  <code class="py-1.1 px-2.5 text-danger">maximumSelectionLength</code>
                  in the select2 options.
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['Alabama', 'Wyoming']"
                :searchable="true"
                :multiple="true"
                :close-on-select="true"
                :show-labels="false"
                v-model="value16"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Dynamic option creation</h4>
                <p class="mb-4">
                  In addition to a prepopulated menu of options, Select2 can dynamically create new options from text input by the user in the search box. This feature is called
                  "tagging". To enable tagging, set the
                  <code class="py-1.1 px-2.5 text-danger">tags</code> option to <code class="py-1.1 px-2.5 text-danger">true</code>:
                </p>
              </div>
              <Multiselect class="automatic-selection" :options="['Red', 'Green', 'Yellow']" :searchable="true" :close-on-select="true" :show-labels="false" v-model="value17" />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Tagging with multi-value select boxes</h4>
                <p class="mb-4">
                  Tagging can also be used in multi-value select boxes. In the example below, we set the
                  <code class="py-1.1 px-2.5 text-danger">multiple="multiple"</code>
                  attribute on a Select2 control that also has
                  <code class="py-1.1 px-2.5 text-danger">tags: true</code>
                  enabled:
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['orange', 'purple']"
                :searchable="true"
                :multiple="true"
                :close-on-select="true"
                :show-labels="false"
                v-model="value17"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/3">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Single select placeholders</h4>
                <p class="mb-4">
                  Select2 supports displaying a placeholder value using the
                  <code class="py-1.1 px-2.5 text-danger">placeholder</code>
                  configuration option. The placeholder value will be displayed until a selection is made.
                </p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="true"
                :close-on-select="true"
                :show-labels="false"
                v-model="value18"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/3">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Multi-select placeholders</h4>
                <p class="mb-4">For multi-selects, you must <strong>not</strong> have an empty <code class="py-1.1 px-2.5 text-danger">&lt;option&gt;</code>element:</p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="false"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value19"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/3">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Default selection placeholders</h4>
                <p class="mb-4">
                  Alternatively, the value of the
                  <code class="py-1.1 px-2.5 text-danger">placeholder</code>
                  option can be a data object representing a default selection (<code class="py-1.1 px-2.5 text-danger">&lt;option&gt;</code>). In this case the
                  <code class="py-1.1 px-2.5 text-danger">id</code> of the data object should match the <code class="py-1.1 px-2.5 text-danger">value</code> of the corresponding
                  default selection.
                </p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="false"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value20"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Customizing how results are matched</h4>
                <p class="mb-4">
                  When users filter down the results by entering search terms into the search box, Select2 uses an internal "matcher" to match search terms to results. You may
                  customize the way that Select2 matches search terms by specifying a callback for the
                  <code class="py-1.1 px-2.5 text-danger">matcher</code>
                  configuration option.
                </p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value21"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Matching grouped options</h4>
                <p class="mb-4">
                  Only first-level objects will be passed in to the
                  <code class="py-1.1 px-2.5 text-danger">matcher</code>
                  callback. If you are working with nested data, you must iterate through the
                  <code class="py-1.1 px-2.5 text-danger">children</code> array and match them individually. This allows for more advanced matching when working with nested
                  objects, allowing you to handle them however you want.
                </p>
              </div>

              <Multiselect
                v-model="value22"
                :options="[
                  {
                    language: 'Group Name',
                    libs: [{ name: 'Nested option 1' }, { name: 'Nested option 2' }, { name: 'Nested option 3' }],
                  },
                  {
                    language: 'Another Group Name',
                    libs: [{ name: 'Nested option 1' }, { name: 'Nested option 2' }, { name: 'Nested option 3' }],
                  },
                ]"
                group-values="libs"
                group-label="language"
                :group-select="true"
                placeholder="Type to search"
                track-by="name"
                label="name"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Minumum search term length</h4>
                <p class="mb-4">
                  You may set a minimum search term length by using the
                  <code class="py-1.1 px-2.5 text-danger">minimumInputLength</code>
                  option:
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value23"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Maximum search term length</h4>
                <p class="mb-4">
                  You may limit the maximum length of search terms by using the
                  <code class="py-1.1 px-2.5 text-danger">maximumInputLength</code>
                  option:
                </p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value24"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Programmatically add new options</h4>
                <p class="mb-4">
                  New options can be added to a Select2 control programmatically by creating a new Javascript
                  <code class="py-1.1 px-2.5 text-danger">Option</code> object and appending it to the control:
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value28"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Create if not exists</h4>
                <p class="mb-4">
                  You can use
                  <code class="py-1.1 px-2.5 text-danger">.find</code> to select the option if it already exists, and create it otherwise:
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value25"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">Using jQuery selector</h4>
                <p class="mb-4">
                  Selected items can also be accessed via the
                  <code class="py-1.1 px-2.5 text-danger">:selected</code>
                  jQuery selector:
                </p>
              </div>

              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value26"
              />
            </div>
          </div>
        </div>

        <div class="xl:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <h4 class="text-base mb-2">RTL support</h4>
                <p class="mb-4">
                  Select2 will work on RTL websites if the
                  <code class="py-1.1 px-2.5 text-danger">dir</code> attribute is set on the <code class="py-1.1 px-2.5 text-danger">&lt;select&gt;</code
                  ><span class="copy-to-clipboard" title="Copy to clipboard"></span>
                  or any parents of it. You can also initialize Select2 with the
                  <code class="py-1.1 px-2.5 text-danger">dir: "rtl"</code><span class="copy-to-clipboard" title="Copy to clipboard"></span>
                  configuration option.
                </p>
              </div>
              <Multiselect
                class="automatic-selection"
                :options="['Alaska', 'Hawaii', 'California']"
                :searchable="true"
                :multiple="false"
                :close-on-select="true"
                :show-labels="false"
                v-model="value27"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
