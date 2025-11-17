export const validateProduct = (data: any) => {
  const errors: any = {};

  if (!data.ten || data.ten.length < 3)
    errors.ten = "Tên sản phẩm phải ≥ 3 ký tự";
  if (!data.gia || data.gia <= 0) errors.gia = "Giá phải là số dương";
  if (
    !data.soLuong ||
    data.soLuong <= 0 ||
    !Number.isInteger(Number(data.soLuong))
  )
    errors.soLuong = "Số lượng phải là số nguyên dương";
  if (!data.danhMuc) errors.danhMuc = "Vui lòng chọn danh mục";

  return errors;
};
