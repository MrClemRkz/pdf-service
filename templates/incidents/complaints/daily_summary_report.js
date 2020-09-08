const config = require("../../../config");
const baseURL = config("BASE_URL");

module.exports = (data) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const today = new Intl.DateTimeFormat("en-LK", options).format(new Date());
  let showECData = (data.centre == "" || data.centre == 'ec-hq' ) ? true : false;

  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
            <title>Daily Summary For Media</title>
            <style>
              @page {
                size: auto;
              }
              td,
              th {
                border-color: black !important;
              }
              th {
                border-bottom: none !important;
              }
              .bold {
                font-weight: bold;
              }
              .document-border {
                padding: 20px;
                padding-left: 50px;
              }
              body {
                font-family: serif;
              }
              .table tbody td {
                padding: 0.25em;
                vertical-align: middle;
                text-align: center;
              }
              .thin-line-height {
                line-height: 0.8
              }
              .footer-contacts, .top-address {
                line-height: 1;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body class="document-border">
            <div class="container">
              <div class="row" style="text-align:center">
                <div class="col-5" style="text-align:right">
                  <img
                    src="${baseURL}/assets/national-emblem.png"
                    alt="emblem-srilanka"
                    style="width:3.3rem;"
                  />
                </div>
                <div class="col-5" style="text-align:left; line-height:1rem">
                  <h3>මැතිවරණ කොමිෂන් සභාව</h3>
                  <h3>தேர்தல் ஆணையம்</h3>
                </div>
              </div>

              <div class="row">
                <div class="col-6" style="line-height:1rem">
                  <br />
                  දුරකථන අංක : 011-2868441, 2868442, 2868443 <br />
                  ෆැක්ස් : 011-2868426 <br />
                  web : www.elections.gov.lk &nbsp; &nbsp; e-mail : info@elections.gov.lk
                </div>
                <div class="col-6" style="line-height:1rem">
                  මැතිවරණ කොමිෂන් සභා කාර්යාලය <br />
                  සරණ මාවත, රාජගිරිය (10107) <br />
                  தேர்தல் ஆணையத்தின் அலுவலகம் <br />
                  சரணா மாவதா, ராஜகிரிய (10107) <br />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-12">
                  <p>අධ්‍යක්ෂ (පර්යේෂණ හා සැලසුම්),</p>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h6 class="thin-line-height">
                    ගතවූ පැය 24 කාලය තුළ (${data.dateInfo}) මැතිවරණ පැමිණිලි සාරාංශ සටහන
                  </h6>
                  <h6 class="thin-line-height">
                    Summary of the complaints during the past 24 hours (${data.dateInfo})
                  </h6>
                  <h6 class="thin-line-height">
                    கடந்த 24 மணி நேரத்தில் புகார்களின் சுருக்கம் (${data.dateInfo})
                  </h6>
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered">
                    <thead class="tblhead">
                      <tr scope="col-12" class="text-center">
                        <th scope="col-4">
                          පැමිණිලි ලැබීම් <br />
                          Receiving Complaints <br />
                          புகார்களைப் பெறுதல் <br />
                        </th>
                        <th scope="col-2">
                          ප්‍රචණ්ඩ ක්‍රියා <br />
                          Violance <br />
                          வன்ெசல்க <br />
                        </th>
                        <th scope="col-2">
                          නීති උල්ලංඝනය කිරීම් <br />Violations of laws <br />
                          மீண்டும் <br />
                        </th>
                        <th scope="col-2">
                          වෙනත් <br />
                          Others <br />
                          மற்ற <br />
                        </th>
                        <th scope="col-2">
                          පැමිණිලි සංඛ්‍යාව <br />
                          Number of Complaints <br />
                          புகார்களின் எண்ணிக்கை <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintsPast24hours, showECData)}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-12">
                  <h6 class="thin-line-height">
                    මුළු පැමිණිලි සාරාංශ සටහන
                  </h6>
                  <h6 class="thin-line-height">
                    Summary of the total recorded complaints
                  </h6>
                  <h6 class="thin-line-height">
                    பதிவுசெய்யப்பட்ட மொத்த புகார்களின் சுருக்கம்
                  </h6>
                </div>
              </div>

              <br />
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered ">
                    <thead class="tblhead">
                      <tr scope="col-12" class="text-center">
                        <th scope="col-4">
                          පැමිණිලි ලැබීම් <br />
                          Receiving Complaints <br />
                          புகார்களைப் பெறுதல் <br />
                        </th>
                        <th scope="col-2">
                          ප්‍රචණ්ඩ ක්‍රියා <br />
                          Violance <br />
                          வன்ெசல்க <br />
                        </th>
                        <th scope="col-2">
                          නීති උල්ලංඝනය කිරීම් <br />Violations of laws <br />
                          மீண்டும் <br />
                        </th>
                        <th scope="col-2">
                          වෙනත් <br />
                          Others <br />
                          மற்ற <br />
                        </th>
                        <th scope="col-2">
                          පැමිණිලි සංඛ්‍යාව <br />
                          Number of Complaints <br />
                          புகார்களின் எண்ணிக்கை <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintsSummary, showECData)}
                    </tbody>
                  </div>
                </table>
              </div>
            </div>
            <footer class="footer mt-5 pt-4">
              <div class="container">
                <div class="row">
                  <span class="footer-contacts">
                    අතිරේක මැතිවරණ කොමසාරිස් / සහකාර මැතිවරණ කොමසාරිස්
                    </br>
                    ජාතික මැතිවරණ පැමිණිළි කළමනාකරණ මධ්‍යස්ථානය
                  </span>
                </div>
                <hr/>
                <div class="row footer-contacts">
                  <div class="col-6">
                    සභාපති <br/>
                    தலைவர் <br/>
                    011-2858444 <br/>
                    011-2858445 <br/>
                    <i>email: chairman@elections.gov.lk</i>
                  </div>
                  <div class="col-6">
                    මැතිවරණ කොමසාරිස් / අධ්‍යක්ෂක ජනරාල් <br/>
                    தேர்தல் ஆணையர் / பணிப்பாளர் நாயகம் <br/>
                    011-2885207 <br/>
                    011-2885208 <br/>
                    <i>email: cge@elections.gov.lk</i>
                  </div>
                </div>
              </div>

            </footer>
          </body>
        </html>
        `;
};

function generateRows(rowData, showECData) {
  return `
  <tr style="display:${ (showECData) ? "" : "none"}">
    <th scope="row">
      ජාතික මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය <br />
      National Election Complaint Management Centre <br />
      தேசிய தேர்தல் புகார் மேலாண்மை மையம் <br />
    </th>
    <td>${rowData.national.disputes}</td>
    <td>${rowData.national.violationOfLaws}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
  </tr>
  <tr>
    <th scope="row">
      දිස්ත්‍රික් මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය <br />
      District Election Complaint Management Centres <br />
      மாவட்ட தேர்தல் புகார் மேலாண்மை மையங்கள் <br />
    </th>
    <td>${rowData.district.disputes}</td>
    <td>${rowData.district.violationOfLaws}</td>
    <td>${rowData.district.others}</td>
    <td>${rowData.district.amount}</td>
  </tr>
  <tr>
    <th scope="row">
      දෛනික මුළු පැමිණිලි සංඛ්‍යාව <br />
      Total of daily complaints <br />
      தினசரி புகார்களின் மொத்தம் <br />
    </th>
    <td>${rowData.totals.disputes}</td>
    <td>${rowData.totals.violationOfLaws}</td>
    <td>${rowData.totals.others}</td>
    <td>${rowData.totals.amount}</td>
  </tr>`;
}
