function addTField(fID, fName) {
if (location.href.indexOf('Post&CODE=00&f=') !== -1 || location.href.indexOf('Post&CODE=02&f=') !== -1) {
    $('#post-icon-options').after('<tr class="custom_field"><td class="pformleft"><b>' + fName + '</b></td><td class="pformright">' +
    '<select name="tags[]" class="textinput" multiple style="height: 300px; max-width: auto;" id="tags-multiselect">' +
     '<option value="0" style="font-weight:bold">By Member</option>' +
     '<option value="<@340490815623397378>" name="Amanda">Amanda</option>' +
     '<option value="<@125766698388291586>" name="Barnkitty">Barnkitty</option>' +
     '<option value="<@255140923317551116>" name="Evie">Evie</option>' +
     '<option value="<@227249664473300992>" name="Free">Free</option>' +
     '<option value="<@276208236913491968>" name="Grimm">Grimm</option>' +
     '<option value="<@284497544287879168>" name="Kosm">Kosm</option>' +
     '<option value="<@791518693069684776>" name="Midnee">Midnee</option>' +
     '<option value="<@250389851013251074>" name="Minxy">Minxy</option>' +
     '<option value="<@277259429060018176>" name="Nia">Nia</option>' +
     '<option value="<@231877741048365056>" name="Nyx">Nyx</option>' +
     '<option value="<@268950321873551360>" name="Rogue">Rogue</option>' +
     '<option value="<@359873849048825856>" name="Rosalina">Rosalina</option>' +
     '<option value="<@360091032152440844>" name="Rye">Rye</option>' +
     '<option value="<@339719492370432001>" name="Susy">Susy</option>' +
     '<option value="<@351560535122116608>" name="Sylph">Sylph</option>' +
     '<option value="<@246454075036532736>" name="Uruviel">Uruviel</option>' +
     '<option value="<@394002329298403339>" name="Vervain">Vervain</option>' +
     '<option value="<@359854788403527680>" name="Vy">Vy</option>' +
     '<option value="<@366035080231125005>" name="Wyvernblind">Wyvern</option>' +
     '<option value="<@305469939408568332>" name="Zodiac">Zodiac</option>' +
     '<option value="0" style="font-weight:bold">By Group</option>' +
     '<option value="<@&359688949792243712>" name="Aesir">Aesir</option>' +
     '<option value="<@&1281715993869156403>" name="Aevum">Aevum</option>' +
     '<option value="<@&1216936514777518131>" name="Aurum">Aurum</option>' +
     '<option value="<@&1281715699709907044>" name="Cencalli">Cencalli</option>' +
     '<option value="<@&1157015017221259314>" name="Impium">Impium</option>' +
     '<option value="<@&1157014769316933682>" name="Irkalla">Irkalla</option>' +
     '<option value="<@&359735090642944000>" name="Kairos">Kairos</option>' +
     '<option value="<@&359735338052354058>" name="Khalsa">Khalsa</option>' +
     '<option value="<@&830861486456963082>" name="Sanctum">Sanctum</option>' +
     '<option value="<@&846486710141321256>" name="Solmani">Solmani</option>' +
     '<option value="<@&359830078219354113>" name="Theseus">Theseus</option>' +
     '<option value="<@&1300613592822845491>" name="Vanir">Vanir</option>' +
 '</select>' +
 '</td></tr>');
   }
}

addTField('61', 'Discord Tags');

function parseField() {
   $('#posting-form:has(tr.custom_field)').closest('form').submit(function() {
       $('tr.custom_field').each(function() {
           if ($(this).find('td.pformright input').val() !== '') {
               var fName = $(this).find('td.pformleft').text();
               var fValue = $(this).find('td.pformright select').val();
               $('textarea[name="Post"]').val('[mentions]' + fValue + '[/mentions]' + $('textarea[name="Post"]').val());
           }
       });
   });
}

parseField();

if ('<!-- |input_st| -->' === '' || '<!-- |input_st| -->' === '0') {
   $('div.postcolor:contains([field=):eq(0)').html($('div.postcolor:contains([field=):eq(0)').html().replace(/\[field=(.+?)\](.+?)\[\/field\]/g, '<div class="custom_field" id="$1">$2</div>'));

   $('div.custom_field').each(function() {
       $(this).attr('id', $(this).attr('id').replace(/ /g, '_'));
   });
}

if (location.href.indexOf('Post&CODE=08') !== -1 && $('textarea[name="Post"]').val().indexOf('[field=') !== -1) {
   jQuery.fn.reverse = [].reverse;
   var fArray = $('textarea[name="Post"]').val().split('\n').reverse();

   $(fArray).each(function(i) {
       if (fArray[i].indexOf('[field=') !== -1) {
           $('#topic-desc').after('<tr class="custom_field"><td class="pformleft">' + fArray[i].split('[field=')[1].split(']')[0] + '</td><td class="pformright"><input value="' + fArray[i].split(/\[field=.+?\]/g)[1].split('[/field]')[0] + '" type="text" size="40" class="forminput"></td></tr>');
       }
   });

   $('textarea[name="Post"]').val($('textarea[name="Post"]').val().replace(/\[field=.+?\].+?\[\/field\]\n/g, ''));
   parseField();
}