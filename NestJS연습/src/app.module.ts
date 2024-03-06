import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { RankModule } from './rank/rank.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

// 싱글톤 패턴으로 인스턴스 생성 
//  루트 모듈 

@Module({
  imports: [RankModule, LeaderboardModule],
  controllers: [], // [AppController],
  providers: [], //[AppService],
})

export class AppModule {}
