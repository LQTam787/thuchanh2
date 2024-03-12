// Tìm kiếm kỳ thi
function searchExam() {
    // Lấy giá trị từ trường tìm kiếm
    var searchTerm = document.getElementById('search-term').value;

    // Xử lý tìm kiếm (có thể thêm AJAX để gọi đến backend)
    alert('Đang tìm kiếm: ' + searchTerm);
}

// Lọc kỳ thi theo trạng thái
function filterExamByStatus(status) {
    // Xử lý lọc kỳ thi theo trạng thái (có thể thêm AJAX để gọi đến backend)
    alert('Đang lọc kỳ thi theo trạng thái: ' + status);
}
