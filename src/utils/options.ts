export const checkPermission = (code: string) => {};

export const ECode_Permission = { View: "View", Edit: "Edit" };

export const treePermissionLeft: TreePermission[] = [
  {
    ActionCode: "SelfAssessment",
    children: [
      {
        ActionCode: "SelfAssessment_Home",
      },
      {
        ActionCode: "SelfAssessment_Data",
      },
      {
        ActionCode: "SelfAssessment_Abbreviation",
      },
      {
        ActionCode: "SelfAssessment_Determination",
      },
      {
        ActionCode: "SelfAssessment_Plan",
      },
      {
        ActionCode: "SelfAssessment_ImplementationPlan",
      },
      {
        ActionCode: "SelfAssessment_Council",
      },
      {
        ActionCode: "SelfAssessment_Assignment",
      },
      {
        ActionCode: "SelfAssessment_MobilizedResource",
      },
      {
        ActionCode: "SelfAssessment_DemonstrationPlan",
      },
      {
        ActionCode: "SelfAssessment_Evidence",
      },
      {
        ActionCode: "SelfAssessment_CriteriaAnalysis",
      },
      {
        ActionCode: "SelfAssessment_Evaluate",
      },
      {
        ActionCode: "SelfAssessment_QualityImprovementPlan",
      },
      {
        ActionCode: "Report_EstablishCouncil",
      },
      {
        ActionCode: "Report_SelfAssessmentPlan",
      },
      {
        ActionCode: "Report_ContentDeterminationForm",
      },
      {
        ActionCode: "Report_ProofCodingCategories",
      },
      {
        ActionCode: "Report_CriteriaEvaluationForm",
      },
      {
        ActionCode: "Report_SelfAssessmentReport",
      },
      {
        ActionCode: "Report_QualityImprovementPlan",
      },
    ],
  },
];

export const treePermissionRight: TreePermission[] = [
  {
    ActionCode: "System",
    children: [
      {
        ActionCode: "System_Classroom",
      },
      {
        ActionCode: "System_TeacherStaff",
      },
      {
        ActionCode: "System_Pupil",
      },
      {
        ActionCode: "System_Result",
      },
      {
        ActionCode: "System_AccessHistory",
      },
    ],
  },
  {
    ActionCode: "SchoolDatabase",
    children: [
      {
        ActionCode: "SchoolDatabase_Information",
      },
      {
        ActionCode: "SchoolDatabase_Class",
      },
      {
        ActionCode: "SchoolDatabase_Classroom",
      },
      {
        ActionCode: "SchoolDatabase_CurrentStaff",
      },
      {
        ActionCode: "SchoolDatabase_TeacherStaff",
      },
      {
        ActionCode: "SchoolDatabase_Pupil",
      },
      {
        ActionCode: "SchoolDatabase_Result",
      },
    ],
  },
  {
    ActionCode: "ExternalAssessment",
    children: [
      {
        ActionCode: "ExternalAssessment_Request",
      },
      {
        ActionCode: "ExternalAssessment_Result",
      },
    ],
  },
  {
    ActionCode: "UserManual",
  },
  // {
  //   ActionCode: "AccountManagement",
  // },
];

export const changeActionLabel = {
  System: "Hệ thống",
  System_Classroom: "Phòng học",
  System_TeacherStaff: "Cán bộ giáo viên các năm",
  System_Pupil: "Học sinh",
  System_Result: "Kết quả giáo dục",
  System_AccessHistory: "Lịch sử truy cập",
  SchoolDatabase: "CSDL Trường",
  SchoolDatabase_Information: "Thông tin trường",
  SchoolDatabase_Class: "Lớp học",
  SchoolDatabase_Classroom: "Phòng học",
  SchoolDatabase_CurrentStaff: "Cán bộ giáo viên hiện tại",
  SchoolDatabase_TeacherStaff: "Cán bộ giáo viên các năm",
  SchoolDatabase_Pupil: "Học sinh",
  SchoolDatabase_Result: "Kết quả giáo dục",
  SelfAssessment: "Kỳ đánh giá",
  SelfAssessment_Home: "Trang chủ",
  SelfAssessment_Data: "Số liệu",
  SelfAssessment_Abbreviation: "Danh mục viết tắt",
  SelfAssessment_Determination: "Quyết định tự đánh giá",
  SelfAssessment_Plan: "Kế hoạch tự đánh giá",
  SelfAssessment_ImplementationPlan: "Kế hoạch thực hiện",
  SelfAssessment_Council: "Hội đồng tự đánh giá",
  SelfAssessment_Assignment: "Phân công tự đánh giá",
  SelfAssessment_MobilizedResource: "Nguồn lực huy động",
  SelfAssessment_DemonstrationPlan: "Kế hoạch minh chứng",
  SelfAssessment_Evidence: "Danh mục minh chứng",
  SelfAssessment_CriteriaAnalysis: "Phân tích tiêu chí tìm MC",
  SelfAssessment_Evaluate: "Đánh giá tiêu chuẩn, tiêu chí",
  SelfAssessment_QualityImprovementPlan: "Kế hoạch cả tiếng chất lượng",
  Report_EstablishCouncil: "Quyết định thành lập hội đồng TĐG",
  Report_SelfAssessmentPlan: "PL1: Kế hoạch tự đánh giá",
  Report_ContentDeterminationForm:
    "PL2,3 Phiếu xác định nội hàm, phân tích tiêu chí tìm minh chứng",
  Report_ProofCodingCategories: "PL4: Bảng danh mục mã hóa MC",
  Report_CriteriaEvaluationForm: "PL5: Phiếu đánh giá tiêu chí",
  Report_SelfAssessmentReport: "PL6: Báo cáo tự đánh giá",
  Report_QualityImprovementPlan: "Báo cáo Kế hoạch cải tiến chất lượng",
  ExternalAssessment: "Đánh giá ngoài",
  ExternalAssessment_Request: "Yêu cầu đánh giá ngoài",
  ExternalAssessment_Result: "Kết quả đánh giá ngoài",
  UserManual: "Hướng dẫn sử dụng",
  // AccountManagement: "Quản lý tài khoản",
};

export const changeAction = {
  HeThong: "System",
  HeThong_PhongHoc: "System_Classroom",
  HeThong_CanBoCacNam: "System_TeacherStaff",
  HeThong_HocSinh: "System_Pupil",
  HeThong_KetQuaGiaoDuc: "System_Result",
  HeThong_LichSuTruyCap: "System_AccessHistory",
  CSDL_Truong: "SchoolDatabase",
  CSDL_Truong_ThongTinTruong: "SchoolDatabase_Information",
  CSDL_Truong_LopHoc: "SchoolDatabase_Class",
  CSDL_Truong_PhongHoc: "SchoolDatabase_Classroom",
  CSDL_Truong_CanBoHienTai: "SchoolDatabase_CurrentStaff",
  CSDL_Truong_CanBoCacNam: "SchoolDatabase_TeacherStaff",
  CSDL_Truong_HocSinh: "SchoolDatabase_Pupil",
  CSDL_Truong_KetQuaGiaoDuc: "SchoolDatabase_Result",
  TDG_KyDanhGia: "SelfAssessment",
  TDG_TrangChu: "SelfAssessment_Home",
  TDG_SoLieu: "SelfAssessment_Data",
  TDG_DanhMucVietTat: "SelfAssessment_Abbreviation",
  TDG_QuyetDinh: "SelfAssessment_Determination",
  TDG_KeHoach: "SelfAssessment_Plan",
  TDG_KeHoachThucHien: "SelfAssessment_ImplementationPlan",
  TDG_HoiDong: "SelfAssessment_Council",
  TDG_PhanCong: "SelfAssessment_Assignment",
  TDG_NguonLuc: "SelfAssessment_MobilizedResource",
  TDG_KeHoachMinhChung: "SelfAssessment_DemonstrationPlan",
  TDG_MinhChung: "SelfAssessment_Evidence",
  TDG_PhanTichNoiHam: "SelfAssessment_CriteriaAnalysis",
  TDG_DanhGia: "SelfAssessment_Evaluate",
  TDG_KeHoachCaiTienChatLuong: "SelfAssessment_QualityImprovementPlan",
  BaoCao_QuyetDinh: "Report_EstablishCouncil",
  BaoCao_KeHoach: "Report_SelfAssessmentPlan",
  BaoCao_PhanTichNoiHam: "Report_ContentDeterminationForm",
  BaoCao_DanhMucMaHoa: "Report_ProofCodingCategories",
  BaoCao_DanhGia: "Report_CriteriaEvaluationForm",
  BaoCao_TuDanhGia: "Report_SelfAssessmentReport",
  BaoCao_KeHoachCaiTienChatLuong: "Report_QualityImprovementPlan",
  HuongDanSuDung: "UserManual",
  QuanLyTaiKhoan: "AccountManagement",

  DanhGiaNgoai: "ExternalAssessment",
  DanhGiaNgoai_YeuCau: "ExternalAssessment_Abbreviation",
  DanhGiaNgoai_KetQua: "ExternalAssessment_Determination",

  QuanLyMauBaoCao: "ManageReportTemplates",
  QuanLyMauBaoCao_TieuChiMuc4: "ManageReportTemplates_CriteriaLevel4",

  ThamDinh: "Appraisal",
  ThamDinh_TuDanhGia: "Appraisal_SelfAssessment",
  ThamDinh_DanhGiaNgoai: "Appraisal_ExternalAssessment",
  ThamDinh_YeuCauDanhGiaNgoai: "Appraisal_RequestExternalAssessment",

  TaiLieu: "Document",
};
