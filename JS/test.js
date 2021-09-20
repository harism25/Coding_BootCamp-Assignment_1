/* Methods for configuring students info*/

function edit_studentrow(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var surname = document.getElementById("studSurname_row" + no);
    var name = document.getElementById("studName_row" + no);
    var age = document.getElementById("studDate_row" + no);
    var fees = document.getElementById("studFees_row" + no);

    var surname_data = surname.innerHTML;
    var name_data = name.innerHTML;
    var age_data = age.innerHTML;
    var fees_data = fees.innerHTML;

    surname.innerHTML =
        "<input type='text' id='surname_text" + no + "' value='" + surname_data + "'>";
    name.innerHTML =
        "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    age.innerHTML =
        "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
    fees.innerHTML =
        "<input type='text' id='fees_text" + no + "' value='" + fees_data + "'>";
}

function save_studentrow(no) {
    var surname_val = document.getElementById("surname_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;
    var fees_val = document.getElementById("fees_text" + no).value;

    //validate values
    if (surname_val == "" || name_val == "" || age_val == "" || fees_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
       
    if ((/[^a-zA-Z]/i.test(surname_val)) || (/[^a-zA-Z]/i.test(name_val)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((surname_val.length < 3) || (name_val.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }

    document.getElementById("studSurname_row" + no).innerHTML = surname_val;
    document.getElementById("studName_row" + no).innerHTML = name_val;
    document.getElementById("studDate_row" + no).innerHTML = age_val;
    document.getElementById("studFees_row" + no).innerHTML = fees_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_studentrow(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_studentrow()
{
    var studSurname = document.getElementById("studSurname").value;
    var studName = document.getElementById("studName").value;
    var studDate = document.getElementById("studDate").value;
    var studFees = document.getElementById("studFees").value;

    //validate values
    if (studSurname == "" || studName == "" || studDate == "" || studFees == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    if (studFees < 0)
    {
        alert("Attention! Fees can not be negative numbers.")
        return false;
    }
     
    if ((/[^a-zA-Z]/i.test(studSurname)) || (/[^a-zA-Z]/i.test(studName)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((studSurname.length < 3) || (studName.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }
    

    var table = document.getElementById("data_table_students");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='studSurname_row" +
        table_len + "'>" + studSurname + "</td><td id='studName_row" + table_len + "'>" +
        studName + "</td><td id='studDate_row" + table_len + "'>" + studDate + "</td><td id='studFees_row" +
        table_len + "'>" + studFees + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_studentrow(" + table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_studentrow(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_studentrow(" + table_len +
        ")'></td></tr>");

    document.getElementById("studSurname").value = "";
    document.getElementById("studName").value = "";
    document.getElementById("studDate").value = "";
    document.getElementById("studFees").value = "";

}


/* Methods for configuring courses info*/

function edit_courserow(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("courseTitle_row" + no);
    var type = document.getElementById("courseType_row" + no);
    var runtime = document.getElementById("runTime_row" + no);
    var startdate = document.getElementById("startDate_row" + no);
    var enddate = document.getElementById("endDate_row" + no);
    var price = document.getElementById("attendPrice_row" + no);

    var title_data = title.innerHTML;
    var type_data = type.innerHTML;
    var runtime_data = runtime.innerHTML;
    var startdate_data = startdate.innerHTML;
    var enddate_data = enddate.innerHTML;
    var price_data = price.innerHTML;

    title.innerHTML =
        "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
    type.innerHTML =
        "<input type='text' id='type_text" + no + "' value='" + type_data + "'>";
    runtime.innerHTML =
        "<input type='text' id='runtime_text" + no + "' value='" + runtime_data + "'>";
    startdate.innerHTML =
        "<input type='text' id='startdate_text" + no + "' value='" + startdate_data + "'>";
    enddate.innerHTML =
        "<input type='text' id='enddate_text" + no + "' value='" + enddate_data + "'>";
    price.innerHTML =
        "<input type='text' id='price_text" + no + "' value='" + price_data + "'>";
}

function save_courserow(no)
{
    var title_val = document.getElementById("title_text" + no).value;
    var type_val = document.getElementById("type_text" + no).value;
    var runtime_val = document.getElementById("runtime_text" + no).value;
    var startdate_val = document.getElementById("startdate_text" + no).value;
    var enddate_val = document.getElementById("enddate_text" + no).value;
    var price_val = document.getElementById("price_text" + no).value;

    //validate values
    if (title_val == "" || type_val == "" || runtime_val == "" || startdate_val == "" || enddate_val == "" || price_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    if (price_val < 0)
    {
        alert("Attention! Fees can not be negative numbers.")
        return false;
    }
     
    if (startdate_val > enddate_val){
        alert("Start date cannot be later than end date..");
        return false;
    }
    

    document.getElementById("courseTitle_row" + no).innerHTML = title_val;
    document.getElementById("courseType_row" + no).innerHTML = type_val;
    document.getElementById("runTime_row" + no).innerHTML = runtime_val;
    document.getElementById("startDate_row" + no).innerHTML = startdate_val;
    document.getElementById("endDate_row" + no).innerHTML = enddate_val;
    document.getElementById("attendPrice_row" + no).innerHTML = price_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_courserow(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_courserow()
{
    var courseTitle = document.getElementById("courseTitle").value;
    var courseType = document.getElementById("courseType").value;
    var runTime = document.getElementById("runTime").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var attendPrice = document.getElementById("attendPrice").value;

    //validate values

    if (courseTitle == "" || courseType  == "" || runTime  == "" || startDate  == "" || endDate  == "" || attendPrice  == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    if (attendPrice < 0)
    {
        alert("Attention! Price can not be a negative number.")
        return false;
    }
     
    if (startDate > endDate){
        alert("Start date cannot be later than end date..");
        return false;
    }


    var table = document.getElementById("data_table_courses");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len +
        "'><td id='courseTitle_row" + table_len +"'>" + courseTitle + "</td><td id='courseType_row" + table_len + "'>" + courseType +
        "</td><td id='runTime_row" + table_len + "'>" + runTime + "</td><td id='startDate_row" + table_len + "'>" +
        startDate + "</td><td id='endDate_row" + table_len + "'>" + endDate + "</td><td id='attendPrice_row" +
        table_len + "'>" + attendPrice + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_courserow(" +
        table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_courserow(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_courserow(" +
        table_len + ")'></td></tr>");

    document.getElementById("courseTitle").value = "";
    document.getElementById("courseType").value = "";
    document.getElementById("runTime").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("attendPrice").value = "";

}


/* Methods for configuring assignments info*/

function edit_asgnmtrow(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("asgnmtTitle_row" + no);
    var sbmtdate = document.getElementById("submitDate_row" + no);

    var title_data = title.innerHTML;
    var sbmtdate_data = sbmtdate.innerHTML;

    title.innerHTML =
        "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
    sbmtdate.innerHTML =
        "<input type='text' id='sbmtdate_text" + no + "' value='" + sbmtdate_data + "'>";
}

function save_asgnmtrow(no)
{
    var title_val = document.getElementById("title_text" + no).value;
    var sbmtdate_val = document.getElementById("sbmtdate_text" + no).value;

    //validate values
    if (title_val == "" || sbmtdate_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }


    document.getElementById("asgnmtTitle_row" + no).innerHTML = title_val;
    document.getElementById("submitDate_row" + no).innerHTML = sbmtdate_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_asgnmtrow(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_asgnmtrow()
{
    var asgnmtTitle = document.getElementById("asgnmtTitle").value;
    var submitDate = document.getElementById("submitDate").value;

    //validate values
    if (asgnmtTitle == "" || submitDate == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    
    var table = document.getElementById("data_table_asgnmts");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='asgnmtTitle_row" +
        table_len + "'>" + asgnmtTitle + "</td><td id='submitDate_row" + table_len + "'>" +
        submitDate + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_asgnmtrow(" + table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_asgnmtrow(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_asgnmtrow(" + table_len +
        ")'></td></tr>");

    document.getElementById("asgnmtTitle").value = "";
    document.getElementById("submitDate").value = "";

}


/* Methods for configuring trainers info*/

function edit_trainerrow(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var surname = document.getElementById("trnrSurname_row" + no);
    var name = document.getElementById("trnrName_row" + no);
    var teachcrs = document.getElementById("teachingCrs_row" + no);

    var surname_data = surname.innerHTML;
    var name_data = name.innerHTML;
    var teachcrs_data = teachcrs.innerHTML;

    surname.innerHTML =
        "<input type='text' id='surname_text" + no + "' value='" + surname_data + "'>";
    name.innerHTML =
        "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    teachcrs.innerHTML =
        "<input type='text' id='teachcrs_text" + no + "' value='" + teachcrs_data + "'>";
}

function save_trainerrow(no)
{
    var surname_val = document.getElementById("surname_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var teachcrs_val = document.getElementById("teachcrs_text" + no).value;

    //validate values
    if (surname_val == "" || name_val == "" || teachcrs_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

     
    if ((/[^a-zA-Z]/i.test(surname_val)) || (/[^a-zA-Z]/i.test(name_val)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((surname_val.length < 3) || (name_val.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }

    document.getElementById("trnrSurname_row" + no).innerHTML = surname_val;
    document.getElementById("trnrName_row" + no).innerHTML = name_val;
    document.getElementById("teachingCrs_row" + no).innerHTML = teachcrs_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_trainerrow(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_trainerrow()
{
    var trnrSurname = document.getElementById("trnrSurname").value;
    var trnrName = document.getElementById("trnrName").value;
    var teachingCrs = document.getElementById("teachingCrs").value;

    //validate values

    if (trnrSurname == "" || trnrName == "" || teachingCrs == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
     
    if ((/[^a-zA-Z]/i.test(trnrSurname)) || (/[^a-zA-Z]/i.test(trnrName)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((trnrSurname.length < 3) || (trnrName.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }

    
    var table = document.getElementById("data_table_trainers");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='trnrSurname_row" +
        table_len + "'>" + trnrSurname + "</td><td id='trnrName_row" + table_len + "'>" +
        trnrName + "</td><td id='teachingCrs_row" + table_len + "'>" + teachingCrs + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_trainerrow(" + table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_trainerrow(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_trainerrow(" + table_len +
        ")'></td></tr>");

    document.getElementById("trnrSurname").value = "";
    document.getElementById("trnrName").value = "";
    document.getElementById("teachingCrs").value = "";

}


/* Methods for configuring students per course info*/

function edit_studcrsrow(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("courseTitle_row" + no);
    var type = document.getElementById("courseType_row" + no);
    var runtime = document.getElementById("runTime_row" + no);
    var surname = document.getElementById("studSurname_row" + no);
    var name = document.getElementById("studName_row" + no);

    var title_data = title.innerHTML;
    var type_data = type.innerHTML;
    var runtime_data = runtime.innerHTML;
    var surname_data = surname.innerHTML;
    var name_data = name.innerHTML;


    title.innerHTML =
        "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
    type.innerHTML =
        "<input type='text' id='type_text" + no + "' value='" + type_data + "'>";
    runtime.innerHTML =
        "<input type='text' id='runtime_text" + no + "' value='" + runtime_data + "'>";
    surname.innerHTML =
        "<input type='text' id='surname_text" + no + "' value='" + surname_data + "'>";
    name.innerHTML =
        "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
}

function save_studcrsrow(no)
{
    var title_val = document.getElementById("title_text" + no).value;
    var type_val = document.getElementById("type_text" + no).value;
    var runtime_val = document.getElementById("runtime_text" + no).value;
    var surname_val = document.getElementById("surname_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;

    //validate values
    if (title_val == "" || type_val == "" || runtime_val == "" || surname_val == "" || name_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
     
    if ((/[^a-zA-Z]/i.test(surname_val)) || (/[^a-zA-Z]/i.test(name_val)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((surname_val.length < 3) || (name_val.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }

    document.getElementById("courseTitle_row" + no).innerHTML = title_val;
    document.getElementById("courseType_row" + no).innerHTML = type_val;
    document.getElementById("runTime_row" + no).innerHTML = runtime_val;
    document.getElementById("studSurname_row" + no).innerHTML = surname_val;
    document.getElementById("studName_row" + no).innerHTML = name_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_studcrsrow(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_studcrsrow()
{
    var courseTitle = document.getElementById("courseTitle").value;
    var courseType = document.getElementById("courseType").value;
    var runTime = document.getElementById("runTime").value;
    var studSurname = document.getElementById("studSurname").value;
    var studName = document.getElementById("studName").value;

    //validate values

    if (courseTitle == "" || courseType == "" || runTime == "" || studSurname == "" || studName == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
     
    if ((/[^a-zA-Z]/i.test(studSurname)) || (/[^a-zA-Z]/i.test(studName)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((studSurname.length < 3) || (studName.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }
    
    var table = document.getElementById("data_table_studcrs");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len +
        "'><td id='courseTitle_row" + table_len +"'>" + courseTitle + "</td><td id='courseType_row" + table_len + "'>" + courseType +
        "</td><td id='runTime_row" + table_len + "'>" + runTime + "</td><td id='studSurname_row" +
        table_len + "'>" + studSurname + "</td><td id='studName_row" + table_len + "'>" +
        studName + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_studcrsrow(" +
        table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_studcrsrow(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_studcrsrow(" +
        table_len + ")'></td></tr>");

    document.getElementById("courseTitle").value = "";
    document.getElementById("courseType").value = "";
    document.getElementById("runTime").value = "";
    document.getElementById("studSurname").value = "";
    document.getElementById("studName").value = "";

}


/* Methods for configuring assignments per course info*/

function edit_asgnmtcrs(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("coursetitle_row" + no);
    var type = document.getElementById("courseType_row" + no);
    var runtime = document.getElementById("runTime_row" + no);
    var astitle = document.getElementById("asgnmttitle_row" + no);
    var sbmtdate = document.getElementById("submitDate_row" + no);

    var title_data = title.innerHTML;
    var type_data = type.innerHTML;
    var runtime_data = runtime.innerHTML;
    var astitle_data = astitle.innerHTML;
    var sbmtdate_data = sbmtdate.innerHTML;


    title.innerHTML =
        "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
    type.innerHTML =
        "<input type='text' id='type_text" + no + "' value='" + type_data + "'>";
    runtime.innerHTML =
        "<input type='text' id='runtime_text" + no + "' value='" + runtime_data + "'>";
    astitle.innerHTML =
        "<input type='text' id='astitle_text" + no + "' value='" + astitle_data + "'>";
    sbmtdate.innerHTML =
        "<input type='text' id='sbmtdate_text" + no + "' value='" + sbmtdate_data + "'>";
}

function save_asgnmtcrs(no)
{
    var title_val = document.getElementById("title_text" + no).value;
    var type_val = document.getElementById("type_text" + no).value;
    var runtime_val = document.getElementById("runtime_text" + no).value;
    var astitle_val = document.getElementById("astitle_text" + no).value;
    var sbmtdate_val = document.getElementById("sbmtdate_text" + no).value;

    //validate values
    if (title_val == "" || type_val == "" || runtime_val == "" || astitle_val == "" || sbmtdate_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
     
    document.getElementById("coursetitle_row" + no).innerHTML = title_val;
    document.getElementById("courseType_row" + no).innerHTML = type_val;
    document.getElementById("runTime_row" + no).innerHTML = runtime_val;
    document.getElementById("asgnmttitle_row" + no).innerHTML = astitle_val;
    document.getElementById("submitDate_row" + no).innerHTML = sbmtdate_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_asgnmtcrs(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_asgnmtcrs()
{
    var coursetitle = document.getElementById("coursetitle").value;
    var courseType = document.getElementById("courseType").value;
    var runTime = document.getElementById("runTime").value;
    var asgnmttitle = document.getElementById("asgnmttitle").value;
    var submitDate = document.getElementById("submitDate").value;

    //Validate values
    
    if (coursetitle == "" || courseType == "" || runTime == "" || asgnmttitle == "" || submitDate == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    var table = document.getElementById("data_table_asgnmtcrs");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len +
        "'><td id='coursetitle_row" + table_len +"'>" + coursetitle + "</td><td id='courseType_row" + table_len + "'>" + courseType +
        "</td><td id='runTime_row" + table_len + "'>" + runTime + "</td><td id='asgnmttitle_row" +
        table_len + "'>" + asgnmttitle + "</td><td id='submitDate_row" + table_len + "'>" +
        submitDate + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_asgnmtcrs(" +
        table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_asgnmtcrs(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_asgnmtcrs(" +
        table_len + ")'></td></tr>");

    document.getElementById("coursetitle").value = "";
    document.getElementById("courseType").value = "";
    document.getElementById("runTime").value = "";
    document.getElementById("asgnmttitle").value = "";
    document.getElementById("submitDate").value = "";

}


/* Methods for configuring trainers per course info*/

function edit_trnrcrs(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var trnrsrnm = document.getElementById("trnrSrnm_row" + no);
    var trnrnm = document.getElementById("trnrNm_row" + no);
    var crstitle = document.getElementById("crsTtl_row" + no);
    var crstpe = document.getElementById("crsType_row" + no);
    var runtime = document.getElementById("crsRntm_row" + no);

    var trnrsrnm_data = trnrsrnm.innerHTML;
    var trnrnm_data = trnrnm.innerHTML;
    var crstitle_data = crstitle.innerHTML;
    var crstpe_data = crstpe.innerHTML;
    var runtime_data = runtime.innerHTML;


    trnrsrnm.innerHTML =
    "<input type='text' id='trnrSrnm_text" + no + "' value='" + trnrsrnm_data + "'>";
    trnrnm.innerHTML =
    "<input type='text' id='trnrNm_text" + no + "' value='" + trnrnm_data + "'>";
    crstitle.innerHTML =
        "<input type='text' id='crsTtl_text" + no + "' value='" + crstitle_data + "'>";
    crstpe.innerHTML =
        "<input type='text' id='crsType_text" + no + "' value='" + crstpe_data + "'>";
    runtime.innerHTML =
        "<input type='text' id='crsRntm_text" + no + "' value='" + runtime_data + "'>";
}

function save_trnrcrs(no)
{
    var trnrsrnm_val = document.getElementById("trnrSrnm_text" + no).value;
    var trnrnm_val = document.getElementById("trnrNm_text" + no).value;
    var crstitle_val = document.getElementById("crsTtl_text" + no).value;
    var crstpe_val = document.getElementById("crsType_text" + no).value;
    var runtime_val = document.getElementById("crsRntm_text" + no).value;

    //validate values
    if (trnrsrnm_val == "" || trnrnm_val == "" || crstitle_val == "" || crstpe_val == "" || runtime_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
       
    if ((/[^a-zA-Z]/i.test(trnrsrnm_val)) || (/[^a-zA-Z]/i.test(trnrnm_val)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((trnrsrnm_val.length < 3) || (trnrnm_val.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }
    
    document.getElementById("trnrSrnm_row" + no).innerHTML = trnrsrnm_val;
    document.getElementById("trnrNm_row" + no).innerHTML = trnrnm_val;
    document.getElementById("crsTtl_row" + no).innerHTML = crstitle_val;
    document.getElementById("crsType_row" + no).innerHTML = crstpe_val;
    document.getElementById("crsRntm_row" + no).innerHTML = runtime_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_trnrcrs(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_trnrcrs()
{
    var trnrSrnm = document.getElementById("trnrSrnm").value;
    var trnrNm = document.getElementById("trnrNm").value;
    var crsTtl = document.getElementById("crsTtl").value;
    var crsType = document.getElementById("crsType").value;
    var runTime = document.getElementById("runTime").value;

    //validate values

    if (trnrSrnm == "" || trnrNm == "" || crsTtl == "" || crsType == "" || runTime == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
     
    if ((/[^a-zA-Z]/i.test(trnrSrnm)) || (/[^a-zA-Z]/i.test(trnrNm)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((trnrSrnm.length < 3) || (trnrNm.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }
    
    var table = document.getElementById("data_table_trnrcrs");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len +
        "'><td id='trnrSrnm_row" + table_len + "'>" + trnrSrnm + "</td><td id='trnrNm_row" + table_len + "'>" +
        trnrNm + "</td><td id='crsTtl_row" + table_len +"'>" + crsTtl + "</td><td id='crsType_row" +
        table_len + "'>" + crsType + "</td><td id='crsRntm_row" + table_len + "'>" + runTime +
        "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_trnrcrs(" +
        table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_trnrcrs(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_trnrcrs(" +
        table_len + ")'></td></tr>");

    document.getElementById("trnrSrnm").value = "";
    document.getElementById("trnrNm").value = "";
    document.getElementById("crsTtl").value = "";
    document.getElementById("crsType").value = "";
    document.getElementById("runTime").value = "";


}


/* Methods for configuring assignments per student per course info*/

function edit_asgmtstudcrs(no)
{
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var crtitle = document.getElementById("coursettl_row" + no);
    var crtype = document.getElementById("coursetp_row" + no);
    var rntime = document.getElementById("rnTme_row" + no);
    var asgnmtitle = document.getElementById("asgnmttl_row" + no);
    var sbmtdate = document.getElementById("sbmDate_row" + no);
    var srname = document.getElementById("stdSurname_row" + no);
    var nme = document.getElementById("stdName_row" + no);

    var crtitle_data = crtitle.innerHTML;
    var crtype_data = crtype.innerHTML;
    var rntime_data = rntime.innerHTML;
    var asgnmtitle_data = asgnmtitle.innerHTML;
    var sbmtdate_data = sbmtdate.innerHTML;
    var srname_data = srname.innerHTML;
    var nme_data = nme.innerHTML;


    crtitle.innerHTML =
        "<input type='text' id='crtitle_text" + no + "' value='" + crtitle_data + "'>";
    crtype.innerHTML =
        "<input type='text' id='crtype_text" + no + "' value='" + crtype_data + "'>";
    rntime.innerHTML =
        "<input type='text' id='rntime_text" + no + "' value='" + rntime_data + "'>";
    asgnmtitle.innerHTML =
        "<input type='text' id='asgnmtitle_text" + no + "' value='" + asgnmtitle_data + "'>";
    sbmtdate.innerHTML =
        "<input type='text' id='sbmtdate_text" + no + "' value='" + sbmtdate_data + "'>";
    srname.innerHTML =
        "<input type='text' id='srname_text" + no + "' value='" + srname_data + "'>";
    nme.innerHTML =
        "<input type='text' id='nme_text" + no + "' value='" + nme_data + "'>";
}

function save_asgmtstudcrs(no)
{
    var crtitle_val = document.getElementById("crtitle_text" + no).value;
    var crtype_val = document.getElementById("crtype_text" + no).value;
    var rntime_val = document.getElementById("rntime_text" + no).value;
    var asgnmtitle_val = document.getElementById("asgnmtitle_text" + no).value;
    var sbmtdate_val = document.getElementById("sbmtdate_text" + no).value;
    var srname_val = document.getElementById("srname_text" + no).value;
    var nme_val = document.getElementById("nme_text" + no).value;

    //validate values
    if (crtitle_val == "" || crtype_val == "" || rntime_val == "" || asgnmtitle_val == "" || sbmtdate_val == "" || srname_val == "" || nme_val == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }
       
    if ((/[^a-zA-Z]/i.test(srname_val)) || (/[^a-zA-Z]/i.test(nme_val)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }
        
    if ((srname_val.length < 3) || (nme_val.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }
        
    document.getElementById("coursettl_row" + no).innerHTML = crtitle_val;
    document.getElementById("coursetp_row" + no).innerHTML = crtype_val;
    document.getElementById("rnTme_row" + no).innerHTML = rntime_val;
    document.getElementById("asgnmttl_row" + no).innerHTML = asgnmtitle_val;
    document.getElementById("sbmDate_row" + no).innerHTML = sbmtdate_val;
    document.getElementById("stdSurname_row" + no).innerHTML = srname_val;
    document.getElementById("stdName_row" + no).innerHTML = nme_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_asgmtstudcrs(no)
{
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_asgmtstudcrs()
{
    var coursettl = document.getElementById("coursettl").value;
    var coursetp = document.getElementById("coursetp").value;
    var rnTme = document.getElementById("rnTme").value;
    var asgnmttl = document.getElementById("asgnmttl").value;
    var sbmDate = document.getElementById("sbmDate").value;
    var stdSurname = document.getElementById("stdSurname").value;
    var stdName = document.getElementById("stdName").value;


    //validate values
    if (coursettl == "" || coursetp == "" || rnTme == "" || asgnmttl == "" || sbmDate == "" || stdSurname == "" || stdName == "")
    {
        alert("Attention! All fields must be filled in to proceed..");
        return false;
    }

    if ((/[^a-zA-Z]/i.test(stdSurname)) || (/[^a-zA-Z]/i.test(stdName)))
    {
        alert("Attention! Name fields can only contain Latin characters with no spaces..");
        return false;
    }

    if ((stdSurname.length < 3) || (stdName.length < 3))
    {
        alert("Attention! Name fields must contain at least 3 characters..");
        return false;
    }

    var table = document.getElementById("data_table_asgmtstudcrs");
    var table_len = table.rows.length ;
    var row = (table.insertRow(table_len).outerHTML = "<tr id='row" + table_len +
        "'><td id='coursettl_row" + table_len +"'>" + coursettl + "</td><td id='coursetp_row" + table_len + "'>" + coursetp +
        "</td><td id='rnTme_row" + table_len + "'>" + rnTme + "</td><td id='asgnmttl_row" +
        table_len + "'>" + asgnmttl + "</td><td id='sbmDate_row" + table_len + "'>" +
        sbmDate + "</td><td id='stdSurname_row" + table_len + "'>" + stdSurname + "</td><td id='stdName_row" + table_len + "'>" +
        stdName + "</td><td><input type='button' id='edit_button" +
        table_len + "' value='Edit' class='edit' onclick='edit_asgmtstudcrs(" +
        table_len + ")'> <input type='button' id='save_button" +
        table_len + "' value='Save' class='save' style='display:none' onclick='save_asgmtstudcrs(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_asgmtstudcrs(" +
        table_len + ")'></td></tr>");

    document.getElementById("coursettl").value = "";
    document.getElementById("coursetp").value = "";
    document.getElementById("rnTme").value = "";
    document.getElementById("asgnmttl").value = "";
    document.getElementById("sbmDate").value = "";
    document.getElementById("stdSurname").value = "";
    document.getElementById("stdName").value = "";


}   

/*function validateForm()
{
    var x = document.forms["myForm"]["fname"].value;
    if (x == "")
    {
        alert("Name must be filled out");
        return false;
    }
}*/