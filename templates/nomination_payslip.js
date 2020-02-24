const config = require('../config');
const baseURL = config('BASE_URL');

module.exports = (data) => {
    const paymentData = data.paymentData
    const today = new Date();
    const depositor = paymentData.depositor;
    const depositAmount = paymentData.depositAmount;
    const candidateCount = paymentData.candidateCount;
    const depositDateParts = paymentData.depositeDate.split("T");
    const depositDateOnly = depositDateParts[0];
    const depositTimeOnly = depositDateParts[1];
    const division = paymentData.division;
    const partyName = paymentData.partyName;

    let template = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
            <style>
                input {
                    border: 0;
                    border-bottom: 1px solid black;
                    border-style: dotted;
                    background: none;
                    width: 62%;
                    text-align: center;
                    position: relative;
                    bottom: 5px;
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
            </style>
        </head>
        <body class="document-border">
            <div class="container">
                <div class="row text-center">
                    <div class="col-4 offset-4">
                        <span class="bold">ඇප මුදල් කුවිතාන්සිය</span> <br/>
                        <span class="bold">DEPOSIT RECEIPT</span>
                    </div>
                </div>
                <br/>
                <br/>
                <div style="font-size: 10px">
                    <div class="row">
                        <div class="col-12">
                            <p>
                                <input type="text" value='${partyName}'> යන පිළිගත් දේශපාලන පක්ෂයේ අපේක්ෂකයන් වෙනුවෙන් <span class="field">................................................................................................................................................</span>  පදිංචි <span class="field">................................................................................................</span> යන අයගේ නායකත්වය ඇති ස්වාධීන කණ්ඩායමේ අපේක්ෂකයන් වෙනුවෙන් ,  පළාත් පාලන අය ආයතන ඡන්ද විමසීම් ආඥාපනතේ 29 වැනි වගන්තිය යටතේ තැන්පත් කරනු ලබන ඇප මුදල වශයෙන් රුපියල් <input type="text" value='${depositAmount}' style="width: 10%;"> ක් ඉහත නම සඳහන් පිළිගත් දේශපාලන පක්ෂයේ ලේකම් /බලයලත් නියෝජිත වන <input type="text" value='${depositor}'> ගෙන් / ඉහත නම් සඳහන් එම කණ්ඩායම් නායකයා / එම කණ්ඩායම් නායකයාගේ බලයලත් නියෝජිතයා වන <span class="field">................................................................................................................................................</span>  පදිංචි <input type="text" value='${depositor}'> ගෙන් භාර ගතිමි.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                                Received from Mr. / Mrs. / Miss. <input type="text" value='${depositor}'> being the Secretary/ Authorized Agent of Recognized Political Party, <input type="text" value='${partyName}'> / from Mr. <span class="field">................................................................................................</span> of <span class="field">................................................................................................................................................</span> being the Group Leader/ Authorized Agent of the Group Leader, Mr. <input type="text" value='${depositor}'> of <span class="field">................................................................................................................................................</span> a sum of Rupees <input type="text" value='${depositAmount}' style="width: 10%;"> being deposit made under Section 29 of the Local Authorities Election Ordinance in respect of the candidates, whose Group Leader/ Recognized Political Party is named above.
                            </p>
                        </div>
                    </div>
                    </br>
                    </br>
                    </br>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            පළාත් පාලන ආයතනයේ නම</br>
                            Name of Local Authority
                        </div>
                        <div class="col-9">
                            <input type="text" value='${division}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            අපේක්ෂකයන් සංඛ්‍යාව</br>
                            Number of Candidates
                        </div>
                        <div class="col-9">
                            <input type="text" value='${candidateCount}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            ඇප මුදල් තැන්පත් කළ දිනය</br>
                            Date of Deposit
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositDateOnly}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            ඇප මුදල් තැන්පත් කළ වේලාව</br>
                            Time of Deposit
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositTimeOnly}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            රුපියල්</br>
                            Rs
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositAmount}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-4 offset-8">
                            <p>
                                </br>
                                </br>
                                </br>
                                .........................................................................</br>
                                තේරීම්භාර නිලධාරී/ සහකාර තේරීම්භාර නිලධාරී</br>
                                Returning Officer/ Assistant Returning Officer
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="row">
                                <div class="col-3">
                                    දිනය</br>
                                    Date
                                </div>
                                <div class="col-9">
                                    ................................................................
                                </div>
                            </div>
                        </div>
                        <div class="col-4 offset-4">
                           <div class="row">
                               <div class="col-8">
                                    <input type="text" value='${division}' style="width: 100%;">
                               </div>
                               <div class="col-4">
                                    දිස්ත්‍රික්කය</br>
                                    District
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </body>
    </html>`;
    return template;
}
