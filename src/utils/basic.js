import request from './request';

/**
 * 添加业务线
 * @param {*} params 
 */
const addBusiness=(params)=>{
  const url='/v1/application/insert'
  return request({
    url,
    methods:'post',
    params
  })
}

/**
 * 查询业务线详情
 * @param {*} params 
 */
const businessDetail=(params)=>{
  const url='/bms/appliction/query/detail'
  return request({
    url,
    methods:'post',
    params
  })
}

/**
 * 查询业务线列表
 * @param {*} params 
 */
const businessList=(params)=>{
  const url='/v1/application/page/list'
  return request({
    url,
    methods:'post',
    params
  })
}

/**
 * 修改业务线
 * @param {*} params 
 */
const updateBusiness=(params)=>{
  const url='/v1/application/update'
  return request({
    url,
    methods:'post',
    params
  })
}



/**
 * 添加区域信息
 * @param {*} params 
 */
const insertArea=(params)=>{
  const url='/bms/area/insert'
  return request({
    url,
    methods:'post',
    params
  })
}

/**
 * 查询所有区域
 */
const queryAllArea=()=>{
  const url='/bms/area/query/alllist'
  return request({
    url,
    methods:'get'
  }) 
}

/**
 * 查询区域详情信息
 */
const queryAreaByCode=()=>{
  const url='/bms/area/query/bycode'
  return request({
    url,
    methods:'post'
  }) 
}

/**
 * 查询区域详情信息
 */
const queryChildAreaList=()=>{
  const url='/bms/area/query/childrenlist'
  return request({
    url,
    methods:'post'
  }) 
}


/**
 * 查询区域列表
 */
const queryAreaList=(params)=>{
  const url='/bms/area/query/list'
  return request({
    url,
    methods:'post',
    params
  }) 
}

/**
 * 更新区域信息
 */
const updateArea=()=>{
  const url='/bms/area/update'
  return request({
    url,
    methods:'put'
  }) 
}

/**
 * 查询所有品类列表
 * @param {*} params 
 */
const queryCategory=(params)=>{
  const url='/v1/category/page/list'
  return request({
    url,
    methods:'post',
    params
  })
}

// 添加版本信息
const addRelease=(params)=>{
  const url='/v1/version/insert'
  return request({
    url,
    methods:'post',
    params
  })
}


/**
 * 查询所有品类列表
 * @param {*} params 
 */
const queryCategoryDetail=(params)=>{
  const url='/bms/category/query/detail'
  return request({
    url,
    methods:'post',
    params
  }) 
}

// 发布版本
const releaseRelease=(params)=>{
  const url='/v1/version/update'
  return request({
    url,
    methods:'post',
    params
  }) 
}

/**
 * 添加商品类目
 * @param {*} params 
 */
const addCategory=(params)=>{
  const url='/v1/category/insert'
  return request({
    url,
    methods:'post',
    params
  }) 
}

// 修改商品类目
const updateCategory=(params)=>{
  const url='/v1/category/update'
  return request({
    url,
    methods:'post',
    params
  }) 
}


/**
 * 删除商品类目
 * @param {*} params 
 */
const deleteCategory=(params)=>{
  const url='/v1/category/delete'
  return request({
    url,
    methods:'post',
    params
  }) 
}

/**
 * 查询父子结构商品类目
 * @param {*} params 
 */
const queryParentCategory=(params)=>{
  const url='/bms/category/query/recursion/list'
  return request({
    url,
    methods:'get',
    params
  })
}

/**
 * 查询所有版本列表
 * @param {*} params 
 */
const queryAllVersion=(params)=>{
  const url='/v1/version/page/list'
  return request({
    url,
    methods:'post',
    params
  })
}

export default{
  addBusiness,
  businessDetail,
  businessList,
  updateBusiness,
  insertArea,
  queryAllArea,
  queryAllVersion,
  queryCategory,
  queryAreaByCode,
  queryChildAreaList,
  queryAreaList,
  updateArea,
  queryCategoryDetail,
  deleteCategory,
  addCategory,
  queryParentCategory,
  addRelease,
  releaseRelease,
  updateCategory
}