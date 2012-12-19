function show_data(data){
  $('#items').html('');
  $.each(data, function(entryIndex, item){
    item_html = ich.item_html(item);
    $('#items').append(item_html);
  });       
}