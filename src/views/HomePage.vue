<template>
  <div>
    <div class="main_content_iner overly_inner ">
      <div class="container-fluid p-0 ">
        <!-- page title  -->
        <div class="row">
          <div class="col-12">
            <div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
              <div class="page_title_left">
                <h3 class="mb-0">Job Cards</h3>
              </div>
              <div class="monitor_list_widget">
                <div class="simgle_monitor_list">
                  <div class="simgle_monitor_count d-flex align-items-center">
                    <span>Estimate</span>
                    <div id="monitor_1"></div>
                  </div>
                  <h4 class="counter">6,250</h4>
                </div>
                <div class="simgle_monitor_list">
                  <div class="simgle_monitor_count d-flex align-items-center">
                    <span>Spares Pending</span>
                    <div id="monitor_2"></div>
                  </div>
                  <h4>$ <span class="counter">55,250</span></h4>
                </div>
                <div class="simgle_monitor_list">
                  <div class="simgle_monitor_count d-flex align-items-center">
                    <span>Work in progress</span>
                    <div id="monitor_3"></div>
                  </div>
                  <h4>$ <span class="counter">451.6 </span>M </h4>
                </div>
                <div class="simgle_monitor_list">
                  <div class="simgle_monitor_count d-flex align-items-center">
                    <span>Ready for Delivery</span>
                    <div id="monitor_4"></div>
                  </div>
                  <h4>$ <span class="counter">55,250</span></h4>
                </div>
                <div class="simgle_monitor_list">
                  <div class="simgle_monitor_count d-flex align-items-center">
                    <span>Invoice</span>
                    <div id="monitor_5"></div>
                  </div>
                  <h4>$ <span class="counter">451.6 </span>M </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="white_card card_height_100 mb_30">
          <div class="white_card_body">
            <div class="QA_section">
              <div class="white_box_tittle list_header">
                <h4></h4>
                <div class="box_right d-flex lms_block">
                  <div class="serach_field_2">
                    <div class="search_inner">
                      <form active="#">
                        <div class="search_field">
                          <input type="text" placeholder="Search content here...">
                        </div>
                        <button type="submit"><i class="ti-search"></i></button>
                      </form>
                    </div>
                  </div>
                  <div class="add_button ml-10">
                    <a href="#" data-toggle="modal" data-target="#addcategory" class="btn_1">Add New</a>
                  </div>
                </div>
              </div>

              <div class="QA_table mb_30">
                <!-- table-responsive -->
                <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper no-footer">
                  <table class="table lms_table_active3 dataTable no-footer dtr-inline" id="DataTables_Table_1"
                         role="grid" aria-describedby="DataTables_Table_1_info" style="width: 1525px;">
                    <thead>
                    <tr role="row">
                      <th scope="col" class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 162px;" aria-sort="ascending"
                          aria-label="title: activate to sort column descending">Job Card No.
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 237px;" aria-label="Category: activate to sort column ascending">
                        Reg. No.
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 236px;" aria-label="Teacher: activate to sort column ascending">
                        Invoice No.
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 228px;" aria-label="Lesson: activate to sort column ascending">
                        Service Type
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 143px;" aria-label="Enrolled: activate to sort column ascending">
                        Vehicle
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 125px;" aria-label="Price: activate to sort column ascending">
                        Arrival Date
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 125px;" aria-label="Price: activate to sort column ascending">
                        Insurance
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 182px;" aria-label="Status: activate to sort column ascending">
                        Status
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 125px;" aria-label="Price: activate to sort column ascending">Est.
                        Delivery Date
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 125px;" aria-label="Price: activate to sort column ascending">Est.
                        Approval Status
                      </th>
                      <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1"
                          colspan="1" style="width: 125px;" aria-label="Price: activate to sort column ascending">Est.
                        Customer
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr role="row" class="odd">
                      <th scope="row" tabindex="0" class="sorting_1"><a href="#" class="question_content"> title here
                        1</a></th>
                      <td>Category name</td>
                      <td>Teacher James</td>
                      <td>Lessons name</td>
                      <td>16</td>
                      <td>$25.00</td>
                      <td><a href="#" class="status_btn">Active</a></td>
                      <td>Lessons name</td>
                      <td>16</td>
                      <td>$25.00</td>
                      <td><a href="#" class="status_btn">Active</a></td>
                    </tr>
                    </tbody>
                  </table>
                  <div class="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1
                    to 10 of 11 entries
                  </div>
                  <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate"><a
                      class="paginate_button previous disabled" aria-controls="DataTables_Table_1" data-dt-idx="0"
                      tabindex="0" id="DataTables_Table_1_previous"><i class="ti-arrow-left"></i></a><span><a
                      class="paginate_button current" aria-controls="DataTables_Table_1" data-dt-idx="1"
                      tabindex="0">1</a><a class="paginate_button " aria-controls="DataTables_Table_1" data-dt-idx="2"
                                           tabindex="0">2</a></span><a class="paginate_button next"
                                                                       aria-controls="DataTables_Table_1"
                                                                       data-dt-idx="3" tabindex="0"
                                                                       id="DataTables_Table_1_next"><i
                      class="ti-arrow-right"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {}
}
</script>
