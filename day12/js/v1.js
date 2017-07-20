$('.new-todo').on('keydown', (e) => {
    if (e.keyCode == 13) {
        let tpl = `
        	<li>
			    <div class="view">
					<input class="toggle" type="checkbox">
						<label>${e.target.value}</label>
						<button class="destroy"></button>
				</div>
					<input class="edit" value="${e.target.value}">
			</li>
        `
        $('.todo-list').append(tpl);
        e.target.value = '';
        toggle();
    }
})

//ul监听，目标是destory，删除是最近的li
$('.todo-list').on('click', '.destroy', (e) => {
    $(e.target).closest('li').remove();
    $('.footer').hide();
    toggle();
}) 

function toggle() {
    let $footer = $('.footer');
    if(!$('.todo-list>li').length){
        $footer.hide();
    }else if($footer.css('display') == 'none'){
        $footer.show();
    }
}