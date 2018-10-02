import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';
import {Comment} from './comment.entity';
import {AddCommentDto} from './dto/add-comment.dto';
import {CommentsService} from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @Post()
  @ApiOperation({ title: 'Add comment' })
  async addComment(@Body() payload: AddCommentDto): Promise<Comment> {
    return this.commentsService.addComment(payload);
  }
}